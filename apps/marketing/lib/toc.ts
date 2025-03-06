import { type Parent, type Root } from 'mdast';
import { toc } from 'mdast-util-toc';
import { remark } from 'remark';
import { type Node } from 'unist';
import { visit } from 'unist-util-visit';
import { type VFile } from 'vfile';

const textTypes = ['text', 'emphasis', 'strong', 'inlineCode'] as const;

function flattenNode(node: Node): string {
  const p: string[] = [];
  visit(node, (node) => {
    if (
      textTypes.includes(node.type as (typeof textTypes)[number]) &&
      'value' in node
    ) {
      p.push(node.value as string);
    }
  });
  return p.join('');
}

type Item = {
  title: string;
  url: string;
  items?: Item[];
};

function getItems(node: Node | undefined, current: Partial<Item> = {}): Item {
  if (!node) return { title: '', url: '' };

  if (node.type === 'paragraph') {
    visit(node as Parent, (item) => {
      if (item.type === 'link' && 'url' in item) {
        current.url = item.url as string;
        current.title = flattenNode(node);
      }
      if (item.type === 'text') {
        current.title = flattenNode(node);
      }
    });
    return { title: current.title || '', url: current.url || '' };
  }

  if (node.type === 'list') {
    return {
      title: current.title || '',
      url: current.url || '',
      items: (node as Parent).children.map((i) => getItems(i))
    };
  }

  if (node.type === 'listItem') {
    const heading = getItems((node as Parent).children[0]);
    if ((node as Parent).children.length > 1) {
      const subItems = getItems((node as Parent).children[1]);
      heading.items = subItems.items;
    }
    return heading;
  }

  return { title: '', url: '' };
}

function getToc(): (tree: Root, file: VFile) => void {
  return (tree: Root, file: VFile) => {
    const table = toc(tree);
    const items = table.map ? getItems(table.map) : { title: '', url: '' };
    file.data = { items: items.items || [] };
  };
}

export type TableOfContents = { items?: Item['items'] };

export async function getTableOfContents(
  content: string
): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content);
  return result.data as TableOfContents;
}
