(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/d64f1_@lexical_table_LexicalTable_dev_mjs_53d7a4._.js", {

"[project]/node_modules/.pnpm/@lexical+table@0.21.0/node_modules/@lexical/table/LexicalTable.dev.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ __turbopack_esm__({
    "$computeTableMap": (()=>$computeTableMap),
    "$computeTableMapSkipCellCheck": (()=>$computeTableMapSkipCellCheck),
    "$createTableCellNode": (()=>$createTableCellNode),
    "$createTableNode": (()=>$createTableNode),
    "$createTableNodeWithDimensions": (()=>$createTableNodeWithDimensions),
    "$createTableRowNode": (()=>$createTableRowNode),
    "$createTableSelection": (()=>$createTableSelection),
    "$deleteTableColumn": (()=>$deleteTableColumn),
    "$deleteTableColumn__EXPERIMENTAL": (()=>$deleteTableColumn__EXPERIMENTAL),
    "$deleteTableRow__EXPERIMENTAL": (()=>$deleteTableRow__EXPERIMENTAL),
    "$findCellNode": (()=>$findCellNode),
    "$findTableNode": (()=>$findTableNode),
    "$getElementForTableNode": (()=>$getElementForTableNode),
    "$getNodeTriplet": (()=>$getNodeTriplet),
    "$getTableAndElementByKey": (()=>$getTableAndElementByKey),
    "$getTableCellNodeFromLexicalNode": (()=>$getTableCellNodeFromLexicalNode),
    "$getTableCellNodeRect": (()=>$getTableCellNodeRect),
    "$getTableColumnIndexFromTableCellNode": (()=>$getTableColumnIndexFromTableCellNode),
    "$getTableNodeFromLexicalNodeOrThrow": (()=>$getTableNodeFromLexicalNodeOrThrow),
    "$getTableRowIndexFromTableCellNode": (()=>$getTableRowIndexFromTableCellNode),
    "$getTableRowNodeFromTableCellNodeOrThrow": (()=>$getTableRowNodeFromTableCellNodeOrThrow),
    "$insertTableColumn": (()=>$insertTableColumn),
    "$insertTableColumn__EXPERIMENTAL": (()=>$insertTableColumn__EXPERIMENTAL),
    "$insertTableRow": (()=>$insertTableRow),
    "$insertTableRow__EXPERIMENTAL": (()=>$insertTableRow__EXPERIMENTAL),
    "$isScrollableTablesActive": (()=>$isScrollableTablesActive),
    "$isTableCellNode": (()=>$isTableCellNode),
    "$isTableNode": (()=>$isTableNode),
    "$isTableRowNode": (()=>$isTableRowNode),
    "$isTableSelection": (()=>$isTableSelection),
    "$removeTableRowAtIndex": (()=>$removeTableRowAtIndex),
    "$unmergeCell": (()=>$unmergeCell),
    "INSERT_TABLE_COMMAND": (()=>INSERT_TABLE_COMMAND),
    "TableCellHeaderStates": (()=>TableCellHeaderStates),
    "TableCellNode": (()=>TableCellNode),
    "TableNode": (()=>TableNode),
    "TableObserver": (()=>TableObserver),
    "TableRowNode": (()=>TableRowNode),
    "applyTableHandlers": (()=>applyTableHandlers),
    "getDOMCellFromTarget": (()=>getDOMCellFromTarget),
    "getTableElement": (()=>getTableElement),
    "getTableObserverFromTableElement": (()=>getTableObserverFromTableElement),
    "setScrollableTablesActive": (()=>setScrollableTablesActive)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@lexical+utils@0.21.0/node_modules/@lexical/utils/LexicalUtils.dev.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lexical@0.21.0/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$clipboard$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@lexical+clipboard@0.21.0/node_modules/@lexical/clipboard/LexicalClipboard.dev.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const PIXEL_VALUE_REG_EXP = /^(\d+(?:\.\d+)?)px$/;
// .PlaygroundEditorTheme__tableCell width value from
// packages/lexical-playground/src/themes/PlaygroundEditorTheme.css
const COLUMN_WIDTH = 75;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const TableCellHeaderStates = {
    BOTH: 3,
    COLUMN: 2,
    NO_STATUS: 0,
    ROW: 1
};
/** @noInheritDoc */ class TableCellNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementNode"] {
    /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ static getType() {
        return 'tablecell';
    }
    static clone(node) {
        return new TableCellNode(node.__headerState, node.__colSpan, node.__width, node.__key);
    }
    afterCloneFrom(node) {
        super.afterCloneFrom(node);
        this.__rowSpan = node.__rowSpan;
        this.__backgroundColor = node.__backgroundColor;
    }
    static importDOM() {
        return {
            td: (node)=>({
                    conversion: $convertTableCellNodeElement,
                    priority: 0
                }),
            th: (node)=>({
                    conversion: $convertTableCellNodeElement,
                    priority: 0
                })
        };
    }
    static importJSON(serializedNode) {
        const colSpan = serializedNode.colSpan || 1;
        const rowSpan = serializedNode.rowSpan || 1;
        return $createTableCellNode(serializedNode.headerState, colSpan, serializedNode.width || undefined).setRowSpan(rowSpan).setBackgroundColor(serializedNode.backgroundColor || null);
    }
    constructor(headerState = TableCellHeaderStates.NO_STATUS, colSpan = 1, width, key){
        super(key);
        this.__colSpan = colSpan;
        this.__rowSpan = 1;
        this.__headerState = headerState;
        this.__width = width;
        this.__backgroundColor = null;
    }
    createDOM(config) {
        const element = document.createElement(this.getTag());
        if (this.__width) {
            element.style.width = `${this.__width}px`;
        }
        if (this.__colSpan > 1) {
            element.colSpan = this.__colSpan;
        }
        if (this.__rowSpan > 1) {
            element.rowSpan = this.__rowSpan;
        }
        if (this.__backgroundColor !== null) {
            element.style.backgroundColor = this.__backgroundColor;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addClassNamesToElement"])(element, config.theme.tableCell, this.hasHeader() && config.theme.tableCellHeader);
        return element;
    }
    exportDOM(editor) {
        const output = super.exportDOM(editor);
        if (output.element && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(output.element)) {
            const element = output.element;
            element.setAttribute('data-temporary-table-cell-lexical-key', this.getKey());
            element.style.border = '1px solid black';
            if (this.__colSpan > 1) {
                element.colSpan = this.__colSpan;
            }
            if (this.__rowSpan > 1) {
                element.rowSpan = this.__rowSpan;
            }
            element.style.width = `${this.getWidth() || COLUMN_WIDTH}px`;
            element.style.verticalAlign = 'top';
            element.style.textAlign = 'start';
            if (this.__backgroundColor === null && this.hasHeader()) {
                element.style.backgroundColor = '#f2f3f5';
            }
        }
        return output;
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            backgroundColor: this.getBackgroundColor(),
            colSpan: this.__colSpan,
            headerState: this.__headerState,
            rowSpan: this.__rowSpan,
            type: 'tablecell',
            width: this.getWidth()
        };
    }
    getColSpan() {
        return this.getLatest().__colSpan;
    }
    setColSpan(colSpan) {
        const self = this.getWritable();
        self.__colSpan = colSpan;
        return self;
    }
    getRowSpan() {
        return this.getLatest().__rowSpan;
    }
    setRowSpan(rowSpan) {
        const self = this.getWritable();
        self.__rowSpan = rowSpan;
        return self;
    }
    getTag() {
        return this.hasHeader() ? 'th' : 'td';
    }
    setHeaderStyles(headerState, mask = TableCellHeaderStates.BOTH) {
        const self = this.getWritable();
        self.__headerState = headerState & mask | self.__headerState & ~mask;
        return self;
    }
    getHeaderStyles() {
        return this.getLatest().__headerState;
    }
    setWidth(width) {
        const self = this.getWritable();
        self.__width = width;
        return self;
    }
    getWidth() {
        return this.getLatest().__width;
    }
    getBackgroundColor() {
        return this.getLatest().__backgroundColor;
    }
    setBackgroundColor(newBackgroundColor) {
        const self = this.getWritable();
        self.__backgroundColor = newBackgroundColor;
        return self;
    }
    toggleHeaderStyle(headerStateToToggle) {
        const self = this.getWritable();
        if ((self.__headerState & headerStateToToggle) === headerStateToToggle) {
            self.__headerState -= headerStateToToggle;
        } else {
            self.__headerState += headerStateToToggle;
        }
        return self;
    }
    hasHeaderState(headerState) {
        return (this.getHeaderStyles() & headerState) === headerState;
    }
    hasHeader() {
        return this.getLatest().__headerState !== TableCellHeaderStates.NO_STATUS;
    }
    updateDOM(prevNode) {
        return prevNode.__headerState !== this.__headerState || prevNode.__width !== this.__width || prevNode.__colSpan !== this.__colSpan || prevNode.__rowSpan !== this.__rowSpan || prevNode.__backgroundColor !== this.__backgroundColor;
    }
    isShadowRoot() {
        return true;
    }
    collapseAtStart() {
        return true;
    }
    canBeEmpty() {
        return false;
    }
    canIndent() {
        return false;
    }
}
function $convertTableCellNodeElement(domNode) {
    const domNode_ = domNode;
    const nodeName = domNode.nodeName.toLowerCase();
    let width = undefined;
    if (PIXEL_VALUE_REG_EXP.test(domNode_.style.width)) {
        width = parseFloat(domNode_.style.width);
    }
    const tableCellNode = $createTableCellNode(nodeName === 'th' ? TableCellHeaderStates.ROW : TableCellHeaderStates.NO_STATUS, domNode_.colSpan, width);
    tableCellNode.__rowSpan = domNode_.rowSpan;
    const backgroundColor = domNode_.style.backgroundColor;
    if (backgroundColor !== '') {
        tableCellNode.__backgroundColor = backgroundColor;
    }
    const style = domNode_.style;
    const textDecoration = (style && style.textDecoration || '').split(' ');
    const hasBoldFontWeight = style.fontWeight === '700' || style.fontWeight === 'bold';
    const hasLinethroughTextDecoration = textDecoration.includes('line-through');
    const hasItalicFontStyle = style.fontStyle === 'italic';
    const hasUnderlineTextDecoration = textDecoration.includes('underline');
    return {
        after: (childLexicalNodes)=>{
            if (childLexicalNodes.length === 0) {
                childLexicalNodes.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])());
            }
            return childLexicalNodes;
        },
        forChild: (lexicalNode, parentLexicalNode)=>{
            if ($isTableCellNode(parentLexicalNode) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(lexicalNode)) {
                const paragraphNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isLineBreakNode"])(lexicalNode) && lexicalNode.getTextContent() === '\n') {
                    return null;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(lexicalNode)) {
                    if (hasBoldFontWeight) {
                        lexicalNode.toggleFormat('bold');
                    }
                    if (hasLinethroughTextDecoration) {
                        lexicalNode.toggleFormat('strikethrough');
                    }
                    if (hasItalicFontStyle) {
                        lexicalNode.toggleFormat('italic');
                    }
                    if (hasUnderlineTextDecoration) {
                        lexicalNode.toggleFormat('underline');
                    }
                }
                paragraphNode.append(lexicalNode);
                return paragraphNode;
            }
            return lexicalNode;
        },
        node: tableCellNode
    };
}
function $createTableCellNode(headerState, colSpan = 1, width) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$applyNodeReplacement"])(new TableCellNode(headerState, colSpan, width));
}
function $isTableCellNode(node) {
    return node instanceof TableCellNode;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const INSERT_TABLE_COMMAND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCommand"])('INSERT_TABLE_COMMAND');
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const documentMode = CAN_USE_DOM && 'documentMode' in document ? document.documentMode : null;
const IS_FIREFOX = CAN_USE_DOM && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
CAN_USE_DOM && 'InputEvent' in window && !documentMode ? 'getTargetRanges' in new window.InputEvent('input') : false;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /** @noInheritDoc */ class TableRowNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementNode"] {
    /** @internal */ static getType() {
        return 'tablerow';
    }
    static clone(node) {
        return new TableRowNode(node.__height, node.__key);
    }
    static importDOM() {
        return {
            tr: (node)=>({
                    conversion: $convertTableRowElement,
                    priority: 0
                })
        };
    }
    static importJSON(serializedNode) {
        return $createTableRowNode(serializedNode.height);
    }
    constructor(height, key){
        super(key);
        this.__height = height;
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            ...this.getHeight() && {
                height: this.getHeight()
            },
            type: 'tablerow',
            version: 1
        };
    }
    createDOM(config) {
        const element = document.createElement('tr');
        if (this.__height) {
            element.style.height = `${this.__height}px`;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addClassNamesToElement"])(element, config.theme.tableRow);
        return element;
    }
    extractWithChild(child, selection, destination) {
        return destination === 'html';
    }
    isShadowRoot() {
        return true;
    }
    setHeight(height) {
        const self = this.getWritable();
        self.__height = height;
        return this.__height;
    }
    getHeight() {
        return this.getLatest().__height;
    }
    updateDOM(prevNode) {
        return prevNode.__height !== this.__height;
    }
    canBeEmpty() {
        return false;
    }
    canIndent() {
        return false;
    }
}
function $convertTableRowElement(domNode) {
    const domNode_ = domNode;
    let height = undefined;
    if (PIXEL_VALUE_REG_EXP.test(domNode_.style.height)) {
        height = parseFloat(domNode_.style.height);
    }
    return {
        node: $createTableRowNode(height)
    };
}
function $createTableRowNode(height) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$applyNodeReplacement"])(new TableRowNode(height));
}
function $isTableRowNode(node) {
    return node instanceof TableRowNode;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function $createTableNodeWithDimensions(rowCount, columnCount, includeHeaders = true) {
    const tableNode = $createTableNode();
    for(let iRow = 0; iRow < rowCount; iRow++){
        const tableRowNode = $createTableRowNode();
        for(let iColumn = 0; iColumn < columnCount; iColumn++){
            let headerState = TableCellHeaderStates.NO_STATUS;
            if (typeof includeHeaders === 'object') {
                if (iRow === 0 && includeHeaders.rows) {
                    headerState |= TableCellHeaderStates.ROW;
                }
                if (iColumn === 0 && includeHeaders.columns) {
                    headerState |= TableCellHeaderStates.COLUMN;
                }
            } else if (includeHeaders) {
                if (iRow === 0) {
                    headerState |= TableCellHeaderStates.ROW;
                }
                if (iColumn === 0) {
                    headerState |= TableCellHeaderStates.COLUMN;
                }
            }
            const tableCellNode = $createTableCellNode(headerState);
            const paragraphNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
            paragraphNode.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createTextNode"])());
            tableCellNode.append(paragraphNode);
            tableRowNode.append(tableCellNode);
        }
        tableNode.append(tableRowNode);
    }
    return tableNode;
}
function $getTableCellNodeFromLexicalNode(startingNode) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(startingNode, (n)=>$isTableCellNode(n));
    if ($isTableCellNode(node)) {
        return node;
    }
    return null;
}
function $getTableRowNodeFromTableCellNodeOrThrow(startingNode) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(startingNode, (n)=>$isTableRowNode(n));
    if ($isTableRowNode(node)) {
        return node;
    }
    throw new Error('Expected table cell to be inside of table row.');
}
function $getTableNodeFromLexicalNodeOrThrow(startingNode) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(startingNode, (n)=>$isTableNode(n));
    if ($isTableNode(node)) {
        return node;
    }
    throw new Error('Expected table cell to be inside of table.');
}
function $getTableRowIndexFromTableCellNode(tableCellNode) {
    const tableRowNode = $getTableRowNodeFromTableCellNodeOrThrow(tableCellNode);
    const tableNode = $getTableNodeFromLexicalNodeOrThrow(tableRowNode);
    return tableNode.getChildren().findIndex((n)=>n.is(tableRowNode));
}
function $getTableColumnIndexFromTableCellNode(tableCellNode) {
    const tableRowNode = $getTableRowNodeFromTableCellNodeOrThrow(tableCellNode);
    return tableRowNode.getChildren().findIndex((n)=>n.is(tableCellNode));
}
function $getTableCellSiblingsFromTableCellNode(tableCellNode, table) {
    const tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode);
    const { x, y } = tableNode.getCordsFromCellNode(tableCellNode, table);
    return {
        above: tableNode.getCellNodeFromCords(x, y - 1, table),
        below: tableNode.getCellNodeFromCords(x, y + 1, table),
        left: tableNode.getCellNodeFromCords(x - 1, y, table),
        right: tableNode.getCellNodeFromCords(x + 1, y, table)
    };
}
function $removeTableRowAtIndex(tableNode, indexToDelete) {
    const tableRows = tableNode.getChildren();
    if (indexToDelete >= tableRows.length || indexToDelete < 0) {
        throw new Error('Expected table cell to be inside of table row.');
    }
    const targetRowNode = tableRows[indexToDelete];
    targetRowNode.remove();
    return tableNode;
}
function $insertTableRow(tableNode, targetIndex, shouldInsertAfter = true, rowCount, table) {
    const tableRows = tableNode.getChildren();
    if (targetIndex >= tableRows.length || targetIndex < 0) {
        throw new Error('Table row target index out of range');
    }
    const targetRowNode = tableRows[targetIndex];
    if ($isTableRowNode(targetRowNode)) {
        for(let r = 0; r < rowCount; r++){
            const tableRowCells = targetRowNode.getChildren();
            const tableColumnCount = tableRowCells.length;
            const newTableRowNode = $createTableRowNode();
            for(let c = 0; c < tableColumnCount; c++){
                const tableCellFromTargetRow = tableRowCells[c];
                if (!$isTableCellNode(tableCellFromTargetRow)) {
                    throw Error(`Expected table cell`);
                }
                const { above, below } = $getTableCellSiblingsFromTableCellNode(tableCellFromTargetRow, table);
                let headerState = TableCellHeaderStates.NO_STATUS;
                const width = above && above.getWidth() || below && below.getWidth() || undefined;
                if (above && above.hasHeaderState(TableCellHeaderStates.COLUMN) || below && below.hasHeaderState(TableCellHeaderStates.COLUMN)) {
                    headerState |= TableCellHeaderStates.COLUMN;
                }
                const tableCellNode = $createTableCellNode(headerState, 1, width);
                tableCellNode.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])());
                newTableRowNode.append(tableCellNode);
            }
            if (shouldInsertAfter) {
                targetRowNode.insertAfter(newTableRowNode);
            } else {
                targetRowNode.insertBefore(newTableRowNode);
            }
        }
    } else {
        throw new Error('Row before insertion index does not exist.');
    }
    return tableNode;
}
const getHeaderState = (currentState, possibleState)=>{
    if (currentState === TableCellHeaderStates.BOTH || currentState === possibleState) {
        return possibleState;
    }
    return TableCellHeaderStates.NO_STATUS;
};
/**
 * Inserts a table row before or after the current focus cell node,
 * taking into account any spans. If successful, returns the
 * inserted table row node.
 */ function $insertTableRow__EXPERIMENTAL(insertAfter = true) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) || $isTableSelection(selection))) {
        throw Error(`Expected a RangeSelection or TableSelection`);
    }
    const focus = selection.focus.getNode();
    const [focusCell, , grid] = $getNodeTriplet(focus);
    const [gridMap, focusCellMap] = $computeTableMap(grid, focusCell, focusCell);
    const columnCount = gridMap[0].length;
    const { startRow: focusStartRow } = focusCellMap;
    let insertedRow = null;
    if (insertAfter) {
        const focusEndRow = focusStartRow + focusCell.__rowSpan - 1;
        const focusEndRowMap = gridMap[focusEndRow];
        const newRow = $createTableRowNode();
        for(let i = 0; i < columnCount; i++){
            const { cell, startRow } = focusEndRowMap[i];
            if (startRow + cell.__rowSpan - 1 <= focusEndRow) {
                const currentCell = focusEndRowMap[i].cell;
                const currentCellHeaderState = currentCell.__headerState;
                const headerState = getHeaderState(currentCellHeaderState, TableCellHeaderStates.COLUMN);
                newRow.append($createTableCellNode(headerState).append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])()));
            } else {
                cell.setRowSpan(cell.__rowSpan + 1);
            }
        }
        const focusEndRowNode = grid.getChildAtIndex(focusEndRow);
        if (!$isTableRowNode(focusEndRowNode)) {
            throw Error(`focusEndRow is not a TableRowNode`);
        }
        focusEndRowNode.insertAfter(newRow);
        insertedRow = newRow;
    } else {
        const focusStartRowMap = gridMap[focusStartRow];
        const newRow = $createTableRowNode();
        for(let i = 0; i < columnCount; i++){
            const { cell, startRow } = focusStartRowMap[i];
            if (startRow === focusStartRow) {
                const currentCell = focusStartRowMap[i].cell;
                const currentCellHeaderState = currentCell.__headerState;
                const headerState = getHeaderState(currentCellHeaderState, TableCellHeaderStates.COLUMN);
                newRow.append($createTableCellNode(headerState).append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])()));
            } else {
                cell.setRowSpan(cell.__rowSpan + 1);
            }
        }
        const focusStartRowNode = grid.getChildAtIndex(focusStartRow);
        if (!$isTableRowNode(focusStartRowNode)) {
            throw Error(`focusEndRow is not a TableRowNode`);
        }
        focusStartRowNode.insertBefore(newRow);
        insertedRow = newRow;
    }
    return insertedRow;
}
function $insertTableColumn(tableNode, targetIndex, shouldInsertAfter = true, columnCount, table) {
    const tableRows = tableNode.getChildren();
    const tableCellsToBeInserted = [];
    for(let r = 0; r < tableRows.length; r++){
        const currentTableRowNode = tableRows[r];
        if ($isTableRowNode(currentTableRowNode)) {
            for(let c = 0; c < columnCount; c++){
                const tableRowChildren = currentTableRowNode.getChildren();
                if (targetIndex >= tableRowChildren.length || targetIndex < 0) {
                    throw new Error('Table column target index out of range');
                }
                const targetCell = tableRowChildren[targetIndex];
                if (!$isTableCellNode(targetCell)) {
                    throw Error(`Expected table cell`);
                }
                const { left, right } = $getTableCellSiblingsFromTableCellNode(targetCell, table);
                let headerState = TableCellHeaderStates.NO_STATUS;
                if (left && left.hasHeaderState(TableCellHeaderStates.ROW) || right && right.hasHeaderState(TableCellHeaderStates.ROW)) {
                    headerState |= TableCellHeaderStates.ROW;
                }
                const newTableCell = $createTableCellNode(headerState);
                newTableCell.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])());
                tableCellsToBeInserted.push({
                    newTableCell,
                    targetCell
                });
            }
        }
    }
    tableCellsToBeInserted.forEach(({ newTableCell, targetCell })=>{
        if (shouldInsertAfter) {
            targetCell.insertAfter(newTableCell);
        } else {
            targetCell.insertBefore(newTableCell);
        }
    });
    return tableNode;
}
/**
 * Inserts a column before or after the current focus cell node,
 * taking into account any spans. If successful, returns the
 * first inserted cell node.
 */ function $insertTableColumn__EXPERIMENTAL(insertAfter = true) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) || $isTableSelection(selection))) {
        throw Error(`Expected a RangeSelection or TableSelection`);
    }
    const anchor = selection.anchor.getNode();
    const focus = selection.focus.getNode();
    const [anchorCell] = $getNodeTriplet(anchor);
    const [focusCell, , grid] = $getNodeTriplet(focus);
    const [gridMap, focusCellMap, anchorCellMap] = $computeTableMap(grid, focusCell, anchorCell);
    const rowCount = gridMap.length;
    const startColumn = insertAfter ? Math.max(focusCellMap.startColumn, anchorCellMap.startColumn) : Math.min(focusCellMap.startColumn, anchorCellMap.startColumn);
    const insertAfterColumn = insertAfter ? startColumn + focusCell.__colSpan - 1 : startColumn - 1;
    const gridFirstChild = grid.getFirstChild();
    if (!$isTableRowNode(gridFirstChild)) {
        throw Error(`Expected firstTable child to be a row`);
    }
    let firstInsertedCell = null;
    function $createTableCellNodeForInsertTableColumn(headerState = TableCellHeaderStates.NO_STATUS) {
        const cell = $createTableCellNode(headerState).append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])());
        if (firstInsertedCell === null) {
            firstInsertedCell = cell;
        }
        return cell;
    }
    let loopRow = gridFirstChild;
    rowLoop: for(let i = 0; i < rowCount; i++){
        if (i !== 0) {
            const currentRow = loopRow.getNextSibling();
            if (!$isTableRowNode(currentRow)) {
                throw Error(`Expected row nextSibling to be a row`);
            }
            loopRow = currentRow;
        }
        const rowMap = gridMap[i];
        const currentCellHeaderState = rowMap[insertAfterColumn < 0 ? 0 : insertAfterColumn].cell.__headerState;
        const headerState = getHeaderState(currentCellHeaderState, TableCellHeaderStates.ROW);
        if (insertAfterColumn < 0) {
            $insertFirst(loopRow, $createTableCellNodeForInsertTableColumn(headerState));
            continue;
        }
        const { cell: currentCell, startColumn: currentStartColumn, startRow: currentStartRow } = rowMap[insertAfterColumn];
        if (currentStartColumn + currentCell.__colSpan - 1 <= insertAfterColumn) {
            let insertAfterCell = currentCell;
            let insertAfterCellRowStart = currentStartRow;
            let prevCellIndex = insertAfterColumn;
            while(insertAfterCellRowStart !== i && insertAfterCell.__rowSpan > 1){
                prevCellIndex -= currentCell.__colSpan;
                if (prevCellIndex >= 0) {
                    const { cell: cell_, startRow: startRow_ } = rowMap[prevCellIndex];
                    insertAfterCell = cell_;
                    insertAfterCellRowStart = startRow_;
                } else {
                    loopRow.append($createTableCellNodeForInsertTableColumn(headerState));
                    continue rowLoop;
                }
            }
            insertAfterCell.insertAfter($createTableCellNodeForInsertTableColumn(headerState));
        } else {
            currentCell.setColSpan(currentCell.__colSpan + 1);
        }
    }
    if (firstInsertedCell !== null) {
        $moveSelectionToCell(firstInsertedCell);
    }
    const colWidths = grid.getColWidths();
    if (colWidths) {
        const newColWidths = [
            ...colWidths
        ];
        const columnIndex = insertAfterColumn < 0 ? 0 : insertAfterColumn;
        const newWidth = newColWidths[columnIndex];
        newColWidths.splice(columnIndex, 0, newWidth);
        grid.setColWidths(newColWidths);
    }
    return firstInsertedCell;
}
function $deleteTableColumn(tableNode, targetIndex) {
    const tableRows = tableNode.getChildren();
    for(let i = 0; i < tableRows.length; i++){
        const currentTableRowNode = tableRows[i];
        if ($isTableRowNode(currentTableRowNode)) {
            const tableRowChildren = currentTableRowNode.getChildren();
            if (targetIndex >= tableRowChildren.length || targetIndex < 0) {
                throw new Error('Table column target index out of range');
            }
            tableRowChildren[targetIndex].remove();
        }
    }
    return tableNode;
}
function $deleteTableRow__EXPERIMENTAL() {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) || $isTableSelection(selection))) {
        throw Error(`Expected a RangeSelection or TableSelection`);
    }
    const [anchor, focus] = selection.isBackward() ? [
        selection.focus.getNode(),
        selection.anchor.getNode()
    ] : [
        selection.anchor.getNode(),
        selection.focus.getNode()
    ];
    const [anchorCell, , grid] = $getNodeTriplet(anchor);
    const [focusCell] = $getNodeTriplet(focus);
    const [gridMap, anchorCellMap, focusCellMap] = $computeTableMap(grid, anchorCell, focusCell);
    const { startRow: anchorStartRow } = anchorCellMap;
    const { startRow: focusStartRow } = focusCellMap;
    const focusEndRow = focusStartRow + focusCell.__rowSpan - 1;
    if (gridMap.length === focusEndRow - anchorStartRow + 1) {
        // Empty grid
        grid.remove();
        return;
    }
    const columnCount = gridMap[0].length;
    const nextRow = gridMap[focusEndRow + 1];
    const nextRowNode = grid.getChildAtIndex(focusEndRow + 1);
    for(let row = focusEndRow; row >= anchorStartRow; row--){
        for(let column = columnCount - 1; column >= 0; column--){
            const { cell, startRow: cellStartRow, startColumn: cellStartColumn } = gridMap[row][column];
            if (cellStartColumn !== column) {
                continue;
            }
            // Rows overflowing top have to be trimmed
            if (row === anchorStartRow && cellStartRow < anchorStartRow) {
                cell.setRowSpan(cell.__rowSpan - (cellStartRow - anchorStartRow));
            }
            // Rows overflowing bottom have to be trimmed and moved to the next row
            if (cellStartRow >= anchorStartRow && cellStartRow + cell.__rowSpan - 1 > focusEndRow) {
                cell.setRowSpan(cell.__rowSpan - (focusEndRow - cellStartRow + 1));
                if (!(nextRowNode !== null)) {
                    throw Error(`Expected nextRowNode not to be null`);
                }
                if (column === 0) {
                    $insertFirst(nextRowNode, cell);
                } else {
                    const { cell: previousCell } = nextRow[column - 1];
                    previousCell.insertAfter(cell);
                }
            }
        }
        const rowNode = grid.getChildAtIndex(row);
        if (!$isTableRowNode(rowNode)) {
            throw Error(`Expected TableNode childAtIndex(${String(row)}) to be RowNode`);
        }
        rowNode.remove();
    }
    if (nextRow !== undefined) {
        const { cell } = nextRow[0];
        $moveSelectionToCell(cell);
    } else {
        const previousRow = gridMap[anchorStartRow - 1];
        const { cell } = previousRow[0];
        $moveSelectionToCell(cell);
    }
}
function $deleteTableColumn__EXPERIMENTAL() {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) || $isTableSelection(selection))) {
        throw Error(`Expected a RangeSelection or TableSelection`);
    }
    const anchor = selection.anchor.getNode();
    const focus = selection.focus.getNode();
    const [anchorCell, , grid] = $getNodeTriplet(anchor);
    const [focusCell] = $getNodeTriplet(focus);
    const [gridMap, anchorCellMap, focusCellMap] = $computeTableMap(grid, anchorCell, focusCell);
    const { startColumn: anchorStartColumn } = anchorCellMap;
    const { startRow: focusStartRow, startColumn: focusStartColumn } = focusCellMap;
    const startColumn = Math.min(anchorStartColumn, focusStartColumn);
    const endColumn = Math.max(anchorStartColumn + anchorCell.__colSpan - 1, focusStartColumn + focusCell.__colSpan - 1);
    const selectedColumnCount = endColumn - startColumn + 1;
    const columnCount = gridMap[0].length;
    if (columnCount === endColumn - startColumn + 1) {
        // Empty grid
        grid.selectPrevious();
        grid.remove();
        return;
    }
    const rowCount = gridMap.length;
    for(let row = 0; row < rowCount; row++){
        for(let column = startColumn; column <= endColumn; column++){
            const { cell, startColumn: cellStartColumn } = gridMap[row][column];
            if (cellStartColumn < startColumn) {
                if (column === startColumn) {
                    const overflowLeft = startColumn - cellStartColumn;
                    // Overflowing left
                    cell.setColSpan(cell.__colSpan - // Possible overflow right too
                    Math.min(selectedColumnCount, cell.__colSpan - overflowLeft));
                }
            } else if (cellStartColumn + cell.__colSpan - 1 > endColumn) {
                if (column === endColumn) {
                    // Overflowing right
                    const inSelectedArea = endColumn - cellStartColumn + 1;
                    cell.setColSpan(cell.__colSpan - inSelectedArea);
                }
            } else {
                cell.remove();
            }
        }
    }
    const focusRowMap = gridMap[focusStartRow];
    const nextColumn = anchorStartColumn > focusStartColumn ? focusRowMap[anchorStartColumn + anchorCell.__colSpan] : focusRowMap[focusStartColumn + focusCell.__colSpan];
    if (nextColumn !== undefined) {
        const { cell } = nextColumn;
        $moveSelectionToCell(cell);
    } else {
        const previousRow = focusStartColumn < anchorStartColumn ? focusRowMap[focusStartColumn - 1] : focusRowMap[anchorStartColumn - 1];
        const { cell } = previousRow;
        $moveSelectionToCell(cell);
    }
    const colWidths = grid.getColWidths();
    if (colWidths) {
        const newColWidths = [
            ...colWidths
        ];
        newColWidths.splice(startColumn, selectedColumnCount);
        grid.setColWidths(newColWidths);
    }
}
function $moveSelectionToCell(cell) {
    const firstDescendant = cell.getFirstDescendant();
    if (firstDescendant == null) {
        cell.selectStart();
    } else {
        firstDescendant.getParentOrThrow().selectStart();
    }
}
function $insertFirst(parent, node) {
    const firstChild = parent.getFirstChild();
    if (firstChild !== null) {
        firstChild.insertBefore(node);
    } else {
        parent.append(node);
    }
}
function $unmergeCell() {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) || $isTableSelection(selection))) {
        throw Error(`Expected a RangeSelection or TableSelection`);
    }
    const anchor = selection.anchor.getNode();
    const [cell, row, grid] = $getNodeTriplet(anchor);
    const colSpan = cell.__colSpan;
    const rowSpan = cell.__rowSpan;
    if (colSpan === 1 && rowSpan === 1) {
        return;
    }
    const [map, cellMap] = $computeTableMap(grid, cell, cell);
    const { startColumn, startRow } = cellMap;
    // Create a heuristic for what the style of the unmerged cells should be
    // based on whether every row or column already had that state before the
    // unmerge.
    const baseColStyle = cell.__headerState & TableCellHeaderStates.COLUMN;
    const colStyles = Array.from({
        length: colSpan
    }, (_v, i)=>{
        let colStyle = baseColStyle;
        for(let rowIdx = 0; colStyle !== 0 && rowIdx < map.length; rowIdx++){
            colStyle &= map[rowIdx][i + startColumn].cell.__headerState;
        }
        return colStyle;
    });
    const baseRowStyle = cell.__headerState & TableCellHeaderStates.ROW;
    const rowStyles = Array.from({
        length: rowSpan
    }, (_v, i)=>{
        let rowStyle = baseRowStyle;
        for(let colIdx = 0; rowStyle !== 0 && colIdx < map[0].length; colIdx++){
            rowStyle &= map[i + startRow][colIdx].cell.__headerState;
        }
        return rowStyle;
    });
    if (colSpan > 1) {
        for(let i = 1; i < colSpan; i++){
            cell.insertAfter($createTableCellNode(colStyles[i] | rowStyles[0]).append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])()));
        }
        cell.setColSpan(1);
    }
    if (rowSpan > 1) {
        let currentRowNode;
        for(let i = 1; i < rowSpan; i++){
            const currentRow = startRow + i;
            const currentRowMap = map[currentRow];
            currentRowNode = (currentRowNode || row).getNextSibling();
            if (!$isTableRowNode(currentRowNode)) {
                throw Error(`Expected row next sibling to be a row`);
            }
            let insertAfterCell = null;
            for(let column = 0; column < startColumn; column++){
                const currentCellMap = currentRowMap[column];
                const currentCell = currentCellMap.cell;
                if (currentCellMap.startRow === currentRow) {
                    insertAfterCell = currentCell;
                }
                if (currentCell.__colSpan > 1) {
                    column += currentCell.__colSpan - 1;
                }
            }
            if (insertAfterCell === null) {
                for(let j = colSpan - 1; j >= 0; j--){
                    $insertFirst(currentRowNode, $createTableCellNode(colStyles[j] | rowStyles[i]).append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])()));
                }
            } else {
                for(let j = colSpan - 1; j >= 0; j--){
                    insertAfterCell.insertAfter($createTableCellNode(colStyles[j] | rowStyles[i]).append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])()));
                }
            }
        }
        cell.setRowSpan(1);
    }
}
function $computeTableMap(tableNode, cellA, cellB) {
    const [tableMap, cellAValue, cellBValue] = $computeTableMapSkipCellCheck(tableNode, cellA, cellB);
    if (!(cellAValue !== null)) {
        throw Error(`Anchor not found in Table`);
    }
    if (!(cellBValue !== null)) {
        throw Error(`Focus not found in Table`);
    }
    return [
        tableMap,
        cellAValue,
        cellBValue
    ];
}
function $computeTableMapSkipCellCheck(tableNode, cellA, cellB) {
    const tableMap = [];
    let cellAValue = null;
    let cellBValue = null;
    function getMapRow(i) {
        let row = tableMap[i];
        if (row === undefined) {
            tableMap[i] = row = [];
        }
        return row;
    }
    const gridChildren = tableNode.getChildren();
    for(let rowIdx = 0; rowIdx < gridChildren.length; rowIdx++){
        const row = gridChildren[rowIdx];
        if (!$isTableRowNode(row)) {
            throw Error(`Expected TableNode children to be TableRowNode`);
        }
        for(let cell = row.getFirstChild(), colIdx = 0; cell != null; cell = cell.getNextSibling()){
            if (!$isTableCellNode(cell)) {
                throw Error(`Expected TableRowNode children to be TableCellNode`);
            } // Skip past any columns that were merged from a higher row
            const startMapRow = getMapRow(rowIdx);
            while(startMapRow[colIdx] !== undefined){
                colIdx++;
            }
            const value = {
                cell,
                startColumn: colIdx,
                startRow: rowIdx
            };
            const { __rowSpan: rowSpan, __colSpan: colSpan } = cell;
            for(let j = 0; j < rowSpan; j++){
                if (rowIdx + j >= gridChildren.length) {
                    break;
                }
                const mapRow = getMapRow(rowIdx + j);
                for(let i = 0; i < colSpan; i++){
                    mapRow[colIdx + i] = value;
                }
            }
            if (cellA !== null && cellAValue === null && cellA.is(cell)) {
                cellAValue = value;
            }
            if (cellB !== null && cellBValue === null && cellB.is(cell)) {
                cellBValue = value;
            }
        }
    }
    return [
        tableMap,
        cellAValue,
        cellBValue
    ];
}
function $getNodeTriplet(source) {
    let cell;
    if (source instanceof TableCellNode) {
        cell = source;
    } else if ('__type' in source) {
        const cell_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(source, $isTableCellNode);
        if (!$isTableCellNode(cell_)) {
            throw Error(`Expected to find a parent TableCellNode`);
        }
        cell = cell_;
    } else {
        const cell_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(source.getNode(), $isTableCellNode);
        if (!$isTableCellNode(cell_)) {
            throw Error(`Expected to find a parent TableCellNode`);
        }
        cell = cell_;
    }
    const row = cell.getParent();
    if (!$isTableRowNode(row)) {
        throw Error(`Expected TableCellNode to have a parent TableRowNode`);
    }
    const grid = row.getParent();
    if (!$isTableNode(grid)) {
        throw Error(`Expected TableRowNode to have a parent TableNode`);
    }
    return [
        cell,
        row,
        grid
    ];
}
function $computeTableCellRectSpans(map, boundary) {
    const { minColumn, maxColumn, minRow, maxRow } = boundary;
    let topSpan = 1;
    let leftSpan = 1;
    let rightSpan = 1;
    let bottomSpan = 1;
    const topRow = map[minRow];
    const bottomRow = map[maxRow];
    for(let col = minColumn; col <= maxColumn; col++){
        topSpan = Math.max(topSpan, topRow[col].cell.__rowSpan);
        bottomSpan = Math.max(bottomSpan, bottomRow[col].cell.__rowSpan);
    }
    for(let row = minRow; row <= maxRow; row++){
        leftSpan = Math.max(leftSpan, map[row][minColumn].cell.__colSpan);
        rightSpan = Math.max(rightSpan, map[row][maxColumn].cell.__colSpan);
    }
    return {
        bottomSpan,
        leftSpan,
        rightSpan,
        topSpan
    };
}
function $computeTableCellRectBoundary(map, cellAMap, cellBMap) {
    let minColumn = Math.min(cellAMap.startColumn, cellBMap.startColumn);
    let minRow = Math.min(cellAMap.startRow, cellBMap.startRow);
    let maxColumn = Math.max(cellAMap.startColumn + cellAMap.cell.__colSpan - 1, cellBMap.startColumn + cellBMap.cell.__colSpan - 1);
    let maxRow = Math.max(cellAMap.startRow + cellAMap.cell.__rowSpan - 1, cellBMap.startRow + cellBMap.cell.__rowSpan - 1);
    let exploredMinColumn = minColumn;
    let exploredMinRow = minRow;
    let exploredMaxColumn = minColumn;
    let exploredMaxRow = minRow;
    function expandBoundary(mapValue) {
        const { cell, startColumn: cellStartColumn, startRow: cellStartRow } = mapValue;
        minColumn = Math.min(minColumn, cellStartColumn);
        minRow = Math.min(minRow, cellStartRow);
        maxColumn = Math.max(maxColumn, cellStartColumn + cell.__colSpan - 1);
        maxRow = Math.max(maxRow, cellStartRow + cell.__rowSpan - 1);
    }
    while(minColumn < exploredMinColumn || minRow < exploredMinRow || maxColumn > exploredMaxColumn || maxRow > exploredMaxRow){
        if (minColumn < exploredMinColumn) {
            // Expand on the left
            const rowDiff = exploredMaxRow - exploredMinRow;
            const previousColumn = exploredMinColumn - 1;
            for(let i = 0; i <= rowDiff; i++){
                expandBoundary(map[exploredMinRow + i][previousColumn]);
            }
            exploredMinColumn = previousColumn;
        }
        if (minRow < exploredMinRow) {
            // Expand on top
            const columnDiff = exploredMaxColumn - exploredMinColumn;
            const previousRow = exploredMinRow - 1;
            for(let i = 0; i <= columnDiff; i++){
                expandBoundary(map[previousRow][exploredMinColumn + i]);
            }
            exploredMinRow = previousRow;
        }
        if (maxColumn > exploredMaxColumn) {
            // Expand on the right
            const rowDiff = exploredMaxRow - exploredMinRow;
            const nextColumn = exploredMaxColumn + 1;
            for(let i = 0; i <= rowDiff; i++){
                expandBoundary(map[exploredMinRow + i][nextColumn]);
            }
            exploredMaxColumn = nextColumn;
        }
        if (maxRow > exploredMaxRow) {
            // Expand on the bottom
            const columnDiff = exploredMaxColumn - exploredMinColumn;
            const nextRow = exploredMaxRow + 1;
            for(let i = 0; i <= columnDiff; i++){
                expandBoundary(map[nextRow][exploredMinColumn + i]);
            }
            exploredMaxRow = nextRow;
        }
    }
    return {
        maxColumn,
        maxRow,
        minColumn,
        minRow
    };
}
function $getTableCellNodeRect(tableCellNode) {
    const [cellNode, , gridNode] = $getNodeTriplet(tableCellNode);
    const rows = gridNode.getChildren();
    const rowCount = rows.length;
    const columnCount = rows[0].getChildren().length;
    // Create a matrix of the same size as the table to track the position of each cell
    const cellMatrix = new Array(rowCount);
    for(let i = 0; i < rowCount; i++){
        cellMatrix[i] = new Array(columnCount);
    }
    for(let rowIndex = 0; rowIndex < rowCount; rowIndex++){
        const row = rows[rowIndex];
        const cells = row.getChildren();
        let columnIndex = 0;
        for(let cellIndex = 0; cellIndex < cells.length; cellIndex++){
            // Find the next available position in the matrix, skip the position of merged cells
            while(cellMatrix[rowIndex][columnIndex]){
                columnIndex++;
            }
            const cell = cells[cellIndex];
            const rowSpan = cell.__rowSpan || 1;
            const colSpan = cell.__colSpan || 1;
            // Put the cell into the corresponding position in the matrix
            for(let i = 0; i < rowSpan; i++){
                for(let j = 0; j < colSpan; j++){
                    cellMatrix[rowIndex + i][columnIndex + j] = cell;
                }
            }
            // Return to the original index, row span and column span of the cell.
            if (cellNode === cell) {
                return {
                    colSpan,
                    columnIndex,
                    rowIndex,
                    rowSpan
                };
            }
            columnIndex += colSpan;
        }
    }
    return null;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function $getCellNodes(tableSelection) {
    const [[anchorNode, anchorCell, anchorRow, anchorTable], [focusNode, focusCell, focusRow, focusTable]] = [
        'anchor',
        'focus'
    ].map((k)=>{
        const node = tableSelection[k].getNode();
        const cellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(node, $isTableCellNode);
        if (!$isTableCellNode(cellNode)) {
            throw Error(`Expected TableSelection ${k} to be (or a child of) TableCellNode, got key ${node.getKey()} of type ${node.getType()}`);
        }
        const rowNode = cellNode.getParent();
        if (!$isTableRowNode(rowNode)) {
            throw Error(`Expected TableSelection ${k} cell parent to be a TableRowNode`);
        }
        const tableNode = rowNode.getParent();
        if (!$isTableNode(tableNode)) {
            throw Error(`Expected TableSelection ${k} row parent to be a TableNode`);
        }
        return [
            node,
            cellNode,
            rowNode,
            tableNode
        ];
    });
    // TODO: nested tables may violate this
    if (!anchorTable.is(focusTable)) {
        throw Error(`Expected TableSelection anchor and focus to be in the same table`);
    }
    return {
        anchorCell,
        anchorNode,
        anchorRow,
        anchorTable,
        focusCell,
        focusNode,
        focusRow,
        focusTable
    };
}
class TableSelection {
    constructor(tableKey, anchor, focus){
        this.anchor = anchor;
        this.focus = focus;
        anchor._selection = this;
        focus._selection = this;
        this._cachedNodes = null;
        this.dirty = false;
        this.tableKey = tableKey;
    }
    getStartEndPoints() {
        return [
            this.anchor,
            this.focus
        ];
    }
    /**
   * {@link $createTableSelection} unfortunately makes it very easy to create
   * nonsense selections, so we have a method to see if the selection probably
   * makes sense.
   *
   * @returns true if the TableSelection is (probably) valid
   */ isValid() {
        return this.tableKey !== 'root' && this.anchor.key !== 'root' && this.anchor.type === 'element' && this.focus.key !== 'root' && this.focus.type === 'element';
    }
    /**
   * Returns whether the Selection is "backwards", meaning the focus
   * logically precedes the anchor in the EditorState.
   * @returns true if the Selection is backwards, false otherwise.
   */ isBackward() {
        return this.focus.isBefore(this.anchor);
    }
    getCachedNodes() {
        return this._cachedNodes;
    }
    setCachedNodes(nodes) {
        this._cachedNodes = nodes;
    }
    is(selection) {
        return $isTableSelection(selection) && this.tableKey === selection.tableKey && this.anchor.is(selection.anchor) && this.focus.is(selection.focus);
    }
    set(tableKey, anchorCellKey, focusCellKey) {
        // note: closure compiler's acorn does not support ||=
        this.dirty = this.dirty || tableKey !== this.tableKey || anchorCellKey !== this.anchor.key || focusCellKey !== this.focus.key;
        this.tableKey = tableKey;
        this.anchor.key = anchorCellKey;
        this.focus.key = focusCellKey;
        this._cachedNodes = null;
    }
    clone() {
        return new TableSelection(this.tableKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createPoint"])(this.anchor.key, this.anchor.offset, this.anchor.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createPoint"])(this.focus.key, this.focus.offset, this.focus.type));
    }
    isCollapsed() {
        return false;
    }
    extract() {
        return this.getNodes();
    }
    insertRawText(text) {
    // Do nothing?
    }
    insertText() {
    // Do nothing?
    }
    /**
   * Returns whether the provided TextFormatType is present on the Selection.
   * This will be true if any paragraph in table cells has the specified format.
   *
   * @param type the TextFormatType to check for.
   * @returns true if the provided format is currently toggled on on the Selection, false otherwise.
   */ hasFormat(type) {
        let format = 0;
        const cellNodes = this.getNodes().filter($isTableCellNode);
        cellNodes.forEach((cellNode)=>{
            const paragraph = cellNode.getFirstChild();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isParagraphNode"])(paragraph)) {
                format |= paragraph.getTextFormat();
            }
        });
        const formatFlag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT_TYPE_TO_FORMAT"][type];
        return (format & formatFlag) !== 0;
    }
    insertNodes(nodes) {
        const focusNode = this.focus.getNode();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(focusNode)) {
            throw Error(`Expected TableSelection focus to be an ElementNode`);
        }
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$normalizeSelection__EXPERIMENTAL"])(focusNode.select(0, focusNode.getChildrenSize()));
        selection.insertNodes(nodes);
    }
    // TODO Deprecate this method. It's confusing when used with colspan|rowspan
    getShape() {
        const { anchorCell, focusCell } = $getCellNodes(this);
        const anchorCellNodeRect = $getTableCellNodeRect(anchorCell);
        if (!(anchorCellNodeRect !== null)) {
            throw Error(`getCellRect: expected to find AnchorNode`);
        }
        const focusCellNodeRect = $getTableCellNodeRect(focusCell);
        if (!(focusCellNodeRect !== null)) {
            throw Error(`getCellRect: expected to find focusCellNode`);
        }
        const startX = Math.min(anchorCellNodeRect.columnIndex, focusCellNodeRect.columnIndex);
        const stopX = Math.max(anchorCellNodeRect.columnIndex + anchorCellNodeRect.colSpan - 1, focusCellNodeRect.columnIndex + focusCellNodeRect.colSpan - 1);
        const startY = Math.min(anchorCellNodeRect.rowIndex, focusCellNodeRect.rowIndex);
        const stopY = Math.max(anchorCellNodeRect.rowIndex + anchorCellNodeRect.rowSpan - 1, focusCellNodeRect.rowIndex + focusCellNodeRect.rowSpan - 1);
        return {
            fromX: Math.min(startX, stopX),
            fromY: Math.min(startY, stopY),
            toX: Math.max(startX, stopX),
            toY: Math.max(startY, stopY)
        };
    }
    getNodes() {
        if (!this.isValid()) {
            return [];
        }
        const cachedNodes = this._cachedNodes;
        if (cachedNodes !== null) {
            return cachedNodes;
        }
        const { anchorTable: tableNode, anchorCell, focusCell } = $getCellNodes(this);
        const focusCellGrid = focusCell.getParents()[1];
        if (focusCellGrid !== tableNode) {
            if (!tableNode.isParentOf(focusCell)) {
                // focus is on higher Grid level than anchor
                const gridParent = tableNode.getParent();
                if (!(gridParent != null)) {
                    throw Error(`Expected gridParent to have a parent`);
                }
                this.set(this.tableKey, gridParent.getKey(), focusCell.getKey());
            } else {
                // anchor is on higher Grid level than focus
                const focusCellParent = focusCellGrid.getParent();
                if (!(focusCellParent != null)) {
                    throw Error(`Expected focusCellParent to have a parent`);
                }
                this.set(this.tableKey, focusCell.getKey(), focusCellParent.getKey());
            }
            return this.getNodes();
        }
        // TODO Mapping the whole Grid every time not efficient. We need to compute the entire state only
        // once (on load) and iterate on it as updates occur. However, to do this we need to have the
        // ability to store a state. Killing TableSelection and moving the logic to the plugin would make
        // this possible.
        const [map, cellAMap, cellBMap] = $computeTableMap(tableNode, anchorCell, focusCell);
        const { minColumn, maxColumn, minRow, maxRow } = $computeTableCellRectBoundary(map, cellAMap, cellBMap);
        // We use a Map here because merged cells in the grid would otherwise
        // show up multiple times in the nodes array
        const nodeMap = new Map([
            [
                tableNode.getKey(),
                tableNode
            ]
        ]);
        let lastRow = null;
        for(let i = minRow; i <= maxRow; i++){
            for(let j = minColumn; j <= maxColumn; j++){
                const { cell } = map[i][j];
                const currentRow = cell.getParent();
                if (!$isTableRowNode(currentRow)) {
                    throw Error(`Expected TableCellNode parent to be a TableRowNode`);
                }
                if (currentRow !== lastRow) {
                    nodeMap.set(currentRow.getKey(), currentRow);
                    lastRow = currentRow;
                }
                if (!nodeMap.has(cell.getKey())) {
                    $visitRecursively(cell, (childNode)=>{
                        nodeMap.set(childNode.getKey(), childNode);
                    });
                }
            }
        }
        const nodes = Array.from(nodeMap.values());
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCurrentlyReadOnlyMode"])()) {
            this._cachedNodes = nodes;
        }
        return nodes;
    }
    getTextContent() {
        const nodes = this.getNodes().filter((node)=>$isTableCellNode(node));
        let textContent = '';
        for(let i = 0; i < nodes.length; i++){
            const node = nodes[i];
            const row = node.__parent;
            const nextRow = (nodes[i + 1] || {}).__parent;
            textContent += node.getTextContent() + (nextRow !== row ? '\n' : '\t');
        }
        return textContent;
    }
}
function $isTableSelection(x) {
    return x instanceof TableSelection;
}
function $createTableSelection() {
    // TODO this is a suboptimal design, it doesn't make sense to have
    // a table selection that isn't associated with a table. This
    // constructor should have required argumnets and in true we
    // should check that they point to a table and are element points to
    // cell nodes of that table.
    const anchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createPoint"])('root', 0, 'element');
    const focus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createPoint"])('root', 0, 'element');
    return new TableSelection('root', anchor, focus);
}
function $createTableSelectionFrom(tableNode, anchorCell, focusCell) {
    const tableNodeKey = tableNode.getKey();
    const anchorCellKey = anchorCell.getKey();
    const focusCellKey = focusCell.getKey();
    {
        if (!tableNode.isAttached()) {
            throw Error(`$createTableSelectionFrom: tableNode ${tableNodeKey} is not attached`);
        }
        if (!tableNode.is($findTableNode(anchorCell))) {
            throw Error(`$createTableSelectionFrom: anchorCell ${anchorCellKey} is not in table ${tableNodeKey}`);
        }
        if (!tableNode.is($findTableNode(focusCell))) {
            throw Error(`$createTableSelectionFrom: focusCell ${focusCellKey} is not in table ${tableNodeKey}`);
        } // TODO: Check for rectangular grid
    }
    const prevSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    const nextSelection = $isTableSelection(prevSelection) ? prevSelection.clone() : $createTableSelection();
    nextSelection.set(tableNode.getKey(), anchorCell.getKey(), focusCell.getKey());
    return nextSelection;
}
/**
 * Depth first visitor
 * @param node The starting node
 * @param $visit The function to call for each node. If the function returns false, then children of this node will not be explored
 */ function $visitRecursively(node, $visit) {
    const stack = [
        [
            node
        ]
    ];
    for(let currentArray = stack.at(-1); currentArray !== undefined && stack.length > 0; currentArray = stack.at(-1)){
        const currentNode = currentArray.pop();
        if (currentNode === undefined) {
            stack.pop();
        } else if ($visit(currentNode) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode)) {
            stack.push(currentNode.getChildren());
        }
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function $getTableAndElementByKey(tableNodeKey, editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getEditor"])()) {
    const tableNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNodeByKey"])(tableNodeKey);
    if (!$isTableNode(tableNode)) {
        throw Error(`TableObserver: Expected tableNodeKey ${tableNodeKey} to be a TableNode`);
    }
    const tableElement = getTableElement(tableNode, editor.getElementByKey(tableNodeKey));
    if (!(tableElement !== null)) {
        throw Error(`TableObserver: Expected to find TableElement in DOM for key ${tableNodeKey}`);
    }
    return {
        tableElement,
        tableNode
    };
}
class TableObserver {
    constructor(editor, tableNodeKey){
        this.isHighlightingCells = false;
        this.anchorX = -1;
        this.anchorY = -1;
        this.focusX = -1;
        this.focusY = -1;
        this.listenersToRemove = new Set();
        this.tableNodeKey = tableNodeKey;
        this.editor = editor;
        this.table = {
            columns: 0,
            domRows: [],
            rows: 0
        };
        this.tableSelection = null;
        this.anchorCellNodeKey = null;
        this.focusCellNodeKey = null;
        this.anchorCell = null;
        this.focusCell = null;
        this.hasHijackedSelectionStyles = false;
        this.isSelecting = false;
        this.shouldCheckSelection = false;
        this.abortController = new AbortController();
        this.listenerOptions = {
            signal: this.abortController.signal
        };
        this.nextFocus = null;
        this.trackTable();
    }
    getTable() {
        return this.table;
    }
    removeListeners() {
        this.abortController.abort('removeListeners');
        Array.from(this.listenersToRemove).forEach((removeListener)=>removeListener());
        this.listenersToRemove.clear();
    }
    $lookup() {
        return $getTableAndElementByKey(this.tableNodeKey, this.editor);
    }
    trackTable() {
        const observer = new MutationObserver((records)=>{
            this.editor.getEditorState().read(()=>{
                let gridNeedsRedraw = false;
                for(let i = 0; i < records.length; i++){
                    const record = records[i];
                    const target = record.target;
                    const nodeName = target.nodeName;
                    if (nodeName === 'TABLE' || nodeName === 'TBODY' || nodeName === 'THEAD' || nodeName === 'TR') {
                        gridNeedsRedraw = true;
                        break;
                    }
                }
                if (!gridNeedsRedraw) {
                    return;
                }
                const { tableNode, tableElement } = this.$lookup();
                this.table = getTable(tableNode, tableElement);
            }, {
                editor: this.editor
            });
        });
        this.editor.getEditorState().read(()=>{
            const { tableNode, tableElement } = this.$lookup();
            this.table = getTable(tableNode, tableElement);
            observer.observe(tableElement, {
                attributes: true,
                childList: true,
                subtree: true
            });
        }, {
            editor: this.editor
        });
    }
    $clearHighlight() {
        const editor = this.editor;
        this.isHighlightingCells = false;
        this.anchorX = -1;
        this.anchorY = -1;
        this.focusX = -1;
        this.focusY = -1;
        this.tableSelection = null;
        this.anchorCellNodeKey = null;
        this.focusCellNodeKey = null;
        this.anchorCell = null;
        this.focusCell = null;
        this.hasHijackedSelectionStyles = false;
        this.$enableHighlightStyle();
        const { tableNode, tableElement } = this.$lookup();
        const grid = getTable(tableNode, tableElement);
        $updateDOMForSelection(editor, grid, null);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])() !== null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(null);
            editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECTION_CHANGE_COMMAND"], undefined);
        }
    }
    $enableHighlightStyle() {
        const editor = this.editor;
        const { tableElement } = this.$lookup();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["removeClassNamesFromElement"])(tableElement, editor._config.theme.tableSelection);
        tableElement.classList.remove('disable-selection');
        this.hasHijackedSelectionStyles = false;
    }
    $disableHighlightStyle() {
        const { tableElement } = this.$lookup();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addClassNamesToElement"])(tableElement, this.editor._config.theme.tableSelection);
        this.hasHijackedSelectionStyles = true;
    }
    $updateTableTableSelection(selection) {
        if (selection !== null) {
            if (!(selection.tableKey === this.tableNodeKey)) {
                throw Error(`TableObserver.$updateTableTableSelection: selection.tableKey !== this.tableNodeKey ('${selection.tableKey}' !== '${this.tableNodeKey}')`);
            }
            const editor = this.editor;
            this.tableSelection = selection;
            this.isHighlightingCells = true;
            this.$disableHighlightStyle();
            this.updateDOMSelection();
            $updateDOMForSelection(editor, this.table, this.tableSelection);
        } else {
            this.$clearHighlight();
        }
    }
    /**
   * @internal
   * Firefox has a strange behavior where pressing the down arrow key from
   * above the table will move the caret after the table and then lexical
   * will select the last cell instead of the first.
   * We do still want to let the browser handle caret movement but we will
   * use this property to "tag" the update so that we can recheck the
   * selection after the event is processed.
   */ setShouldCheckSelection() {
        this.shouldCheckSelection = true;
    }
    /**
   * @internal
   */ getAndClearShouldCheckSelection() {
        if (this.shouldCheckSelection) {
            this.shouldCheckSelection = false;
            return true;
        }
        return false;
    }
    /**
   * @internal
   * When handling mousemove events we track what the focus cell should be, but
   * the DOM selection may end up somewhere else entirely. We don't have an elegant
   * way to handle this after the DOM selection has been resolved in a
   * SELECTION_CHANGE_COMMAND callback.
   */ setNextFocus(nextFocus) {
        this.nextFocus = nextFocus;
    }
    /** @internal */ getAndClearNextFocus() {
        const { nextFocus } = this;
        if (nextFocus !== null) {
            this.nextFocus = null;
        }
        return nextFocus;
    }
    /** @internal */ updateDOMSelection() {
        if (this.anchorCell !== null && this.focusCell !== null) {
            const domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOMSelection"])(this.editor._window);
            // We are not using a native selection for tables, and if we
            // set one then the reconciler will undo it.
            // TODO - it would make sense to have one so that native
            //        copy/paste worked. Right now we have to emulate with
            //        keyboard events but it won't fire if trigged from the menu
            if (domSelection && domSelection.rangeCount > 0) {
                domSelection.removeAllRanges();
            }
        }
    }
    $setFocusCellForSelection(cell, ignoreStart = false) {
        const editor = this.editor;
        const { tableNode } = this.$lookup();
        const cellX = cell.x;
        const cellY = cell.y;
        this.focusCell = cell;
        if (!this.isHighlightingCells && (this.anchorX !== cellX || this.anchorY !== cellY || ignoreStart)) {
            this.isHighlightingCells = true;
            this.$disableHighlightStyle();
        } else if (cellX === this.focusX && cellY === this.focusY) {
            return false;
        }
        this.focusX = cellX;
        this.focusY = cellY;
        if (this.isHighlightingCells) {
            const focusTableCellNode = $getNearestTableCellInTableFromDOMNode(tableNode, cell.elem);
            if (this.tableSelection != null && this.anchorCellNodeKey != null && focusTableCellNode !== null) {
                this.focusCellNodeKey = focusTableCellNode.getKey();
                this.tableSelection = $createTableSelectionFrom(tableNode, this.$getAnchorTableCellOrThrow(), focusTableCellNode);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(this.tableSelection);
                editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECTION_CHANGE_COMMAND"], undefined);
                $updateDOMForSelection(editor, this.table, this.tableSelection);
                return true;
            }
        }
        return false;
    }
    $getAnchorTableCell() {
        return this.anchorCellNodeKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNodeByKey"])(this.anchorCellNodeKey) : null;
    }
    $getAnchorTableCellOrThrow() {
        const anchorTableCell = this.$getAnchorTableCell();
        if (!(anchorTableCell !== null)) {
            throw Error(`TableObserver anchorTableCell is null`);
        }
        return anchorTableCell;
    }
    $getFocusTableCell() {
        return this.focusCellNodeKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNodeByKey"])(this.focusCellNodeKey) : null;
    }
    $getFocusTableCellOrThrow() {
        const focusTableCell = this.$getFocusTableCell();
        if (!(focusTableCell !== null)) {
            throw Error(`TableObserver focusTableCell is null`);
        }
        return focusTableCell;
    }
    $setAnchorCellForSelection(cell) {
        this.isHighlightingCells = false;
        this.anchorCell = cell;
        this.anchorX = cell.x;
        this.anchorY = cell.y;
        const { tableNode } = this.$lookup();
        const anchorTableCellNode = $getNearestTableCellInTableFromDOMNode(tableNode, cell.elem);
        if (anchorTableCellNode !== null) {
            const anchorNodeKey = anchorTableCellNode.getKey();
            this.tableSelection = this.tableSelection != null ? this.tableSelection.clone() : $createTableSelection();
            this.anchorCellNodeKey = anchorNodeKey;
        }
    }
    $formatCells(type) {
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!$isTableSelection(selection)) {
            throw Error(`Expected Table selection`);
        }
        const formatSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createRangeSelection"])();
        const anchor = formatSelection.anchor;
        const focus = formatSelection.focus;
        const cellNodes = selection.getNodes().filter($isTableCellNode);
        if (!(cellNodes.length > 0)) {
            throw Error(`No table cells present`);
        }
        const paragraph = cellNodes[0].getFirstChild();
        const alignFormatWith = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isParagraphNode"])(paragraph) ? paragraph.getFormatFlags(type, null) : null;
        cellNodes.forEach((cellNode)=>{
            anchor.set(cellNode.getKey(), 0, 'element');
            focus.set(cellNode.getKey(), cellNode.getChildrenSize(), 'element');
            formatSelection.formatText(type, alignFormatWith);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(selection);
        this.editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECTION_CHANGE_COMMAND"], undefined);
    }
    $clearText() {
        const { editor } = this;
        const tableNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNodeByKey"])(this.tableNodeKey);
        if (!$isTableNode(tableNode)) {
            throw new Error('Expected TableNode.');
        }
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!$isTableSelection(selection)) {
            {
                throw Error(`Expected grid selection`);
            }
        }
        const selectedNodes = selection.getNodes().filter($isTableCellNode);
        if (selectedNodes.length === this.table.columns * this.table.rows) {
            tableNode.selectPrevious();
            // Delete entire table
            tableNode.remove();
            const rootNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])();
            rootNode.selectStart();
            return;
        }
        selectedNodes.forEach((cellNode)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(cellNode)) {
                const paragraphNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
                const textNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createTextNode"])();
                paragraphNode.append(textNode);
                cellNode.append(paragraphNode);
                cellNode.getChildren().forEach((child)=>{
                    if (child !== paragraphNode) {
                        child.remove();
                    }
                });
            }
        });
        $updateDOMForSelection(editor, this.table, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(null);
        editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECTION_CHANGE_COMMAND"], undefined);
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const LEXICAL_ELEMENT_KEY = '__lexicalTableSelection';
const isMouseDownOnEvent = (event)=>{
    return (event.buttons & 1) === 1;
};
function getTableElement(tableNode, dom) {
    if (!dom) {
        return dom;
    }
    const element = dom.nodeName === 'TABLE' ? dom : tableNode.getDOMSlot(dom).element;
    if (!(element.nodeName === 'TABLE')) {
        throw Error(`getTableElement: Expecting table in as DOM node for TableNode, not ${dom.nodeName}`);
    }
    return element;
}
function getEditorWindow(editor) {
    return editor._window;
}
function $findParentTableCellNodeInTable(tableNode, node) {
    for(let currentNode = node, lastTableCellNode = null; currentNode !== null; currentNode = currentNode.getParent()){
        if (tableNode.is(currentNode)) {
            return lastTableCellNode;
        } else if ($isTableCellNode(currentNode)) {
            lastTableCellNode = currentNode;
        }
    }
    return null;
}
const ARROW_KEY_COMMANDS_WITH_DIRECTION = [
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ARROW_DOWN_COMMAND"],
        'down'
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ARROW_UP_COMMAND"],
        'up'
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ARROW_LEFT_COMMAND"],
        'backward'
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ARROW_RIGHT_COMMAND"],
        'forward'
    ]
];
const DELETE_TEXT_COMMANDS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_WORD_COMMAND"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_LINE_COMMAND"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_CHARACTER_COMMAND"]
];
const DELETE_KEY_COMMANDS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_BACKSPACE_COMMAND"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_DELETE_COMMAND"]
];
function applyTableHandlers(tableNode, element, editor, hasTabHandler) {
    const rootElement = editor.getRootElement();
    const editorWindow = getEditorWindow(editor);
    if (!(rootElement !== null && editorWindow !== null)) {
        throw Error(`applyTableHandlers: editor has no root element set`);
    }
    const tableObserver = new TableObserver(editor, tableNode.getKey());
    const tableElement = getTableElement(tableNode, element);
    attachTableObserverToTableElement(tableElement, tableObserver);
    tableObserver.listenersToRemove.add(()=>detatchTableObserverFromTableElement(tableElement, tableObserver));
    const createMouseHandlers = ()=>{
        if (tableObserver.isSelecting) {
            return;
        }
        const onMouseUp = ()=>{
            tableObserver.isSelecting = false;
            editorWindow.removeEventListener('mouseup', onMouseUp);
            editorWindow.removeEventListener('mousemove', onMouseMove);
        };
        const onMouseMove = (moveEvent)=>{
            if (!isMouseDownOnEvent(moveEvent) && tableObserver.isSelecting) {
                tableObserver.isSelecting = false;
                editorWindow.removeEventListener('mouseup', onMouseUp);
                editorWindow.removeEventListener('mousemove', onMouseMove);
                return;
            }
            const override = !tableElement.contains(moveEvent.target);
            let focusCell = null;
            if (!override) {
                focusCell = getDOMCellFromTarget(moveEvent.target);
            } else {
                for (const el of document.elementsFromPoint(moveEvent.clientX, moveEvent.clientY)){
                    focusCell = tableElement.contains(el) ? getDOMCellFromTarget(el) : null;
                    if (focusCell) {
                        break;
                    }
                }
            }
            if (focusCell && (tableObserver.focusCell === null || focusCell.elem !== tableObserver.focusCell.elem)) {
                tableObserver.setNextFocus({
                    focusCell,
                    override
                });
                editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECTION_CHANGE_COMMAND"], undefined);
            }
        };
        tableObserver.isSelecting = true;
        editorWindow.addEventListener('mouseup', onMouseUp, tableObserver.listenerOptions);
        editorWindow.addEventListener('mousemove', onMouseMove, tableObserver.listenerOptions);
    };
    const onMouseDown = (event)=>{
        if (event.button !== 0) {
            return;
        }
        if (!editorWindow) {
            return;
        }
        const targetCell = getDOMCellFromTarget(event.target);
        if (targetCell !== null) {
            editor.update(()=>{
                const prevSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getPreviousSelection"])();
                // We can't trust Firefox to do the right thing with the selection and
                // we don't have a proper state machine to do this "correctly" but
                // if we go ahead and make the table selection now it will work
                if (IS_FIREFOX && event.shiftKey && $isSelectionInTable(prevSelection, tableNode) && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(prevSelection) || $isTableSelection(prevSelection))) {
                    const prevAnchorNode = prevSelection.anchor.getNode();
                    const prevAnchorCell = $findParentTableCellNodeInTable(tableNode, prevSelection.anchor.getNode());
                    if (prevAnchorCell) {
                        tableObserver.$setAnchorCellForSelection($getObserverCellFromCellNodeOrThrow(tableObserver, prevAnchorCell));
                        tableObserver.$setFocusCellForSelection(targetCell);
                        stopEvent(event);
                    } else {
                        const newSelection = tableNode.isBefore(prevAnchorNode) ? tableNode.selectStart() : tableNode.selectEnd();
                        newSelection.anchor.set(prevSelection.anchor.key, prevSelection.anchor.offset, prevSelection.anchor.type);
                    }
                } else {
                    tableObserver.$setAnchorCellForSelection(targetCell);
                }
            });
        }
        createMouseHandlers();
    };
    tableElement.addEventListener('mousedown', onMouseDown, tableObserver.listenerOptions);
    // Clear selection when clicking outside of dom.
    const mouseDownCallback = (event)=>{
        if (event.button !== 0) {
            return;
        }
        editor.update(()=>{
            const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
            const target = event.target;
            if ($isTableSelection(selection) && selection.tableKey === tableObserver.tableNodeKey && rootElement.contains(target)) {
                tableObserver.$clearHighlight();
            }
        });
    };
    editorWindow.addEventListener('mousedown', mouseDownCallback, tableObserver.listenerOptions);
    for (const [command, direction] of ARROW_KEY_COMMANDS_WITH_DIRECTION){
        tableObserver.listenersToRemove.add(editor.registerCommand(command, (event)=>$handleArrowKey(editor, event, direction, tableNode, tableObserver), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_HIGH"]));
    }
    tableObserver.listenersToRemove.add(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ESCAPE_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ($isTableSelection(selection)) {
            const focusCellNode = $findParentTableCellNodeInTable(tableNode, selection.focus.getNode());
            if (focusCellNode !== null) {
                stopEvent(event);
                focusCellNode.selectEnd();
                return true;
            }
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_HIGH"]));
    const deleteTextHandler = (command)=>()=>{
            const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
            if (!$isSelectionInTable(selection, tableNode)) {
                return false;
            }
            if ($isTableSelection(selection)) {
                tableObserver.$clearText();
                return true;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
                const tableCellNode = $findParentTableCellNodeInTable(tableNode, selection.anchor.getNode());
                if (!$isTableCellNode(tableCellNode)) {
                    return false;
                }
                const anchorNode = selection.anchor.getNode();
                const focusNode = selection.focus.getNode();
                const isAnchorInside = tableNode.isParentOf(anchorNode);
                const isFocusInside = tableNode.isParentOf(focusNode);
                const selectionContainsPartialTable = isAnchorInside && !isFocusInside || isFocusInside && !isAnchorInside;
                if (selectionContainsPartialTable) {
                    tableObserver.$clearText();
                    return true;
                }
                const nearestElementNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(selection.anchor.getNode(), (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(n));
                const topLevelCellElementNode = nearestElementNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(nearestElementNode, (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(n) && $isTableCellNode(n.getParent()));
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(topLevelCellElementNode) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(nearestElementNode)) {
                    return false;
                }
                if (command === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_LINE_COMMAND"] && topLevelCellElementNode.getPreviousSibling() === null) {
                    // TODO: Fix Delete Line in Table Cells.
                    return true;
                }
            }
            return false;
        };
    for (const command of DELETE_TEXT_COMMANDS){
        tableObserver.listenersToRemove.add(editor.registerCommand(command, deleteTextHandler(command), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
    }
    const $deleteCellHandler = (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!($isTableSelection(selection) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection))) {
            return false;
        }
        // If the selection is inside the table but should remove the whole table
        // we expand the selection so that both the anchor and focus are outside
        // the table and the editor's command listener will handle the delete
        const isAnchorInside = tableNode.isParentOf(selection.anchor.getNode());
        const isFocusInside = tableNode.isParentOf(selection.focus.getNode());
        if (isAnchorInside !== isFocusInside) {
            const tablePoint = isAnchorInside ? 'anchor' : 'focus';
            const outerPoint = isAnchorInside ? 'focus' : 'anchor';
            // Preserve the outer point
            const { key, offset, type } = selection[outerPoint];
            // Expand the selection around the table
            const newSelection = tableNode[selection[tablePoint].isBefore(selection[outerPoint]) ? 'selectPrevious' : 'selectNext']();
            // Restore the outer point of the selection
            newSelection[outerPoint].set(key, offset, type);
            // Let the base implementation handle the rest
            return false;
        }
        if ($isTableSelection(selection)) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            tableObserver.$clearText();
            return true;
        }
        return false;
    };
    for (const command of DELETE_KEY_COMMANDS){
        tableObserver.listenersToRemove.add(editor.registerCommand(command, $deleteCellHandler, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
    }
    tableObserver.listenersToRemove.add(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUT_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (selection) {
            if (!($isTableSelection(selection) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection))) {
                return false;
            }
            // Copying to the clipboard is async so we must capture the data
            // before we delete it
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$clipboard$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(editor, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, ClipboardEvent) ? event : null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$clipboard$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getClipboardDataFromSelection"])(selection));
            const intercepted = $deleteCellHandler(event);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
                selection.removeText();
                return true;
            }
            return intercepted;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
    tableObserver.listenersToRemove.add(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMAT_TEXT_COMMAND"], (payload)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!$isSelectionInTable(selection, tableNode)) {
            return false;
        }
        if ($isTableSelection(selection)) {
            tableObserver.$formatCells(payload);
            return true;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            const tableCellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(selection.anchor.getNode(), (n)=>$isTableCellNode(n));
            if (!$isTableCellNode(tableCellNode)) {
                return false;
            }
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
    tableObserver.listenersToRemove.add(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMAT_ELEMENT_COMMAND"], (formatType)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!$isTableSelection(selection) || !$isSelectionInTable(selection, tableNode)) {
            return false;
        }
        const anchorNode = selection.anchor.getNode();
        const focusNode = selection.focus.getNode();
        if (!$isTableCellNode(anchorNode) || !$isTableCellNode(focusNode)) {
            return false;
        }
        const [tableMap, anchorCell, focusCell] = $computeTableMap(tableNode, anchorNode, focusNode);
        const maxRow = Math.max(anchorCell.startRow + anchorCell.cell.__rowSpan - 1, focusCell.startRow + focusCell.cell.__rowSpan - 1);
        const maxColumn = Math.max(anchorCell.startColumn + anchorCell.cell.__colSpan - 1, focusCell.startColumn + focusCell.cell.__colSpan - 1);
        const minRow = Math.min(anchorCell.startRow, focusCell.startRow);
        const minColumn = Math.min(anchorCell.startColumn, focusCell.startColumn);
        const visited = new Set();
        for(let i = minRow; i <= maxRow; i++){
            for(let j = minColumn; j <= maxColumn; j++){
                const cell = tableMap[i][j].cell;
                if (visited.has(cell)) {
                    continue;
                }
                visited.add(cell);
                cell.setFormat(formatType);
                const cellChildren = cell.getChildren();
                for(let k = 0; k < cellChildren.length; k++){
                    const child = cellChildren[k];
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(child) && !child.isInline()) {
                        child.setFormat(formatType);
                    }
                }
            }
        }
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
    tableObserver.listenersToRemove.add(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTROLLED_TEXT_INSERTION_COMMAND"], (payload)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!$isSelectionInTable(selection, tableNode)) {
            return false;
        }
        if ($isTableSelection(selection)) {
            tableObserver.$clearHighlight();
            return false;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            const tableCellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(selection.anchor.getNode(), (n)=>$isTableCellNode(n));
            if (!$isTableCellNode(tableCellNode)) {
                return false;
            }
            if (typeof payload === 'string') {
                const edgePosition = $getTableEdgeCursorPosition(editor, selection, tableNode);
                if (edgePosition) {
                    $insertParagraphAtTableEdge(edgePosition, tableNode, [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createTextNode"])(payload)
                    ]);
                    return true;
                }
            }
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
    if (hasTabHandler) {
        tableObserver.listenersToRemove.add(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_TAB_COMMAND"], (event)=>{
            const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) || !selection.isCollapsed() || !$isSelectionInTable(selection, tableNode)) {
                return false;
            }
            const tableCellNode = $findCellNode(selection.anchor.getNode());
            if (tableCellNode === null || !tableNode.is($findTableNode(tableCellNode))) {
                return false;
            }
            stopEvent(event);
            $selectAdjacentCell(tableCellNode, event.shiftKey ? 'previous' : 'next');
            return true;
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
    }
    tableObserver.listenersToRemove.add(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOCUS_COMMAND"], (payload)=>{
        return tableNode.isSelected();
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_HIGH"]));
    tableObserver.listenersToRemove.add(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"], (selectionPayload)=>{
        const { nodes, selection } = selectionPayload;
        const anchorAndFocus = selection.getStartEndPoints();
        const isTableSelection = $isTableSelection(selection);
        const isRangeSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection);
        const isSelectionInsideOfGrid = isRangeSelection && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(selection.anchor.getNode(), (n)=>$isTableCellNode(n)) !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(selection.focus.getNode(), (n)=>$isTableCellNode(n)) !== null || isTableSelection;
        if (nodes.length !== 1 || !$isTableNode(nodes[0]) || !isSelectionInsideOfGrid || anchorAndFocus === null) {
            return false;
        }
        const [anchor] = anchorAndFocus;
        const newGrid = nodes[0];
        const newGridRows = newGrid.getChildren();
        const newColumnCount = newGrid.getFirstChildOrThrow().getChildrenSize();
        const newRowCount = newGrid.getChildrenSize();
        const gridCellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(anchor.getNode(), (n)=>$isTableCellNode(n));
        const gridRowNode = gridCellNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(gridCellNode, (n)=>$isTableRowNode(n));
        const gridNode = gridRowNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(gridRowNode, (n)=>$isTableNode(n));
        if (!$isTableCellNode(gridCellNode) || !$isTableRowNode(gridRowNode) || !$isTableNode(gridNode)) {
            return false;
        }
        const startY = gridRowNode.getIndexWithinParent();
        const stopY = Math.min(gridNode.getChildrenSize() - 1, startY + newRowCount - 1);
        const startX = gridCellNode.getIndexWithinParent();
        const stopX = Math.min(gridRowNode.getChildrenSize() - 1, startX + newColumnCount - 1);
        const fromX = Math.min(startX, stopX);
        const fromY = Math.min(startY, stopY);
        const toX = Math.max(startX, stopX);
        const toY = Math.max(startY, stopY);
        const gridRowNodes = gridNode.getChildren();
        let newRowIdx = 0;
        for(let r = fromY; r <= toY; r++){
            const currentGridRowNode = gridRowNodes[r];
            if (!$isTableRowNode(currentGridRowNode)) {
                return false;
            }
            const newGridRowNode = newGridRows[newRowIdx];
            if (!$isTableRowNode(newGridRowNode)) {
                return false;
            }
            const gridCellNodes = currentGridRowNode.getChildren();
            const newGridCellNodes = newGridRowNode.getChildren();
            let newColumnIdx = 0;
            for(let c = fromX; c <= toX; c++){
                const currentGridCellNode = gridCellNodes[c];
                if (!$isTableCellNode(currentGridCellNode)) {
                    return false;
                }
                const newGridCellNode = newGridCellNodes[newColumnIdx];
                if (!$isTableCellNode(newGridCellNode)) {
                    return false;
                }
                const originalChildren = currentGridCellNode.getChildren();
                newGridCellNode.getChildren().forEach((child)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(child)) {
                        const paragraphNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
                        paragraphNode.append(child);
                        currentGridCellNode.append(child);
                    } else {
                        currentGridCellNode.append(child);
                    }
                });
                originalChildren.forEach((n)=>n.remove());
                newColumnIdx++;
            }
            newRowIdx++;
        }
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
    tableObserver.listenersToRemove.add(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECTION_CHANGE_COMMAND"], ()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        const prevSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getPreviousSelection"])();
        const nextFocus = tableObserver.getAndClearNextFocus();
        if (nextFocus !== null) {
            const { focusCell } = nextFocus;
            if ($isTableSelection(selection) && selection.tableKey === tableObserver.tableNodeKey) {
                if (focusCell.x === tableObserver.focusX && focusCell.y === tableObserver.focusY) {
                    // The selection is already the correct table selection
                    return false;
                } else {
                    tableObserver.$setFocusCellForSelection(focusCell);
                    return true;
                }
            } else if (focusCell !== tableObserver.anchorCell && $isSelectionInTable(selection, tableNode)) {
                // The selection has crossed cells
                tableObserver.$setFocusCellForSelection(focusCell);
                return true;
            }
        }
        const shouldCheckSelection = tableObserver.getAndClearShouldCheckSelection();
        // If they pressed the down arrow with the selection outside of the
        // table, and then the selection ends up in the table but not in the
        // first cell, then move the selection to the first cell.
        if (shouldCheckSelection && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(prevSelection) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed()) {
            const anchor = selection.anchor.getNode();
            const firstRow = tableNode.getFirstChild();
            const anchorCell = $findCellNode(anchor);
            if (anchorCell !== null && $isTableRowNode(firstRow)) {
                const firstCell = firstRow.getFirstChild();
                if ($isTableCellNode(firstCell) && tableNode.is((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(anchorCell, (node)=>node.is(tableNode) || node.is(firstCell)))) {
                    // The selection moved to the table, but not in the first cell
                    firstCell.selectStart();
                    return true;
                }
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            const { anchor, focus } = selection;
            const anchorNode = anchor.getNode();
            const focusNode = focus.getNode();
            // Using explicit comparison with table node to ensure it's not a nested table
            // as in that case we'll leave selection resolving to that table
            const anchorCellNode = $findCellNode(anchorNode);
            const focusCellNode = $findCellNode(focusNode);
            const isAnchorInside = !!(anchorCellNode && tableNode.is($findTableNode(anchorCellNode)));
            const isFocusInside = !!(focusCellNode && tableNode.is($findTableNode(focusCellNode)));
            const isPartiallyWithinTable = isAnchorInside !== isFocusInside;
            const isWithinTable = isAnchorInside && isFocusInside;
            const isBackward = selection.isBackward();
            if (isPartiallyWithinTable) {
                const newSelection = selection.clone();
                if (isFocusInside) {
                    const [tableMap] = $computeTableMap(tableNode, focusCellNode, focusCellNode);
                    const firstCell = tableMap[0][0].cell;
                    const lastCell = tableMap[tableMap.length - 1].at(-1).cell;
                    newSelection.focus.set(isBackward ? firstCell.getKey() : lastCell.getKey(), isBackward ? firstCell.getChildrenSize() : lastCell.getChildrenSize(), 'element');
                } else if (isAnchorInside) {
                    const [tableMap] = $computeTableMap(tableNode, anchorCellNode, anchorCellNode);
                    const firstCell = tableMap[0][0].cell;
                    const lastCell = tableMap[tableMap.length - 1].at(-1).cell;
                    /**
           * If isBackward, set the anchor to be at the end of the table so that when the cursor moves outside of
           * the table in the backward direction, the entire table will be selected from its end.
           * Otherwise, if forward, set the anchor to be at the start of the table so that when the focus is dragged
           * outside th end of the table, it will start from the beginning of the table.
           */ newSelection.anchor.set(isBackward ? lastCell.getKey() : firstCell.getKey(), isBackward ? lastCell.getChildrenSize() : 0, 'element');
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(newSelection);
                $addHighlightStyleToTable(editor, tableObserver);
            } else if (isWithinTable) {
                // Handle case when selection spans across multiple cells but still
                // has range selection, then we convert it into table selection
                if (!anchorCellNode.is(focusCellNode)) {
                    tableObserver.$setAnchorCellForSelection($getObserverCellFromCellNodeOrThrow(tableObserver, anchorCellNode));
                    tableObserver.$setFocusCellForSelection($getObserverCellFromCellNodeOrThrow(tableObserver, focusCellNode), true);
                }
            }
        } else if (selection && $isTableSelection(selection) && selection.is(prevSelection) && selection.tableKey === tableNode.getKey()) {
            // if selection goes outside of the table we need to change it to Range selection
            const domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOMSelection"])(editorWindow);
            if (domSelection && domSelection.anchorNode && domSelection.focusNode) {
                const focusNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(domSelection.focusNode);
                const isFocusOutside = focusNode && !tableNode.isParentOf(focusNode);
                const anchorNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(domSelection.anchorNode);
                const isAnchorInside = anchorNode && tableNode.isParentOf(anchorNode);
                if (isFocusOutside && isAnchorInside && domSelection.rangeCount > 0) {
                    const newSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createRangeSelectionFromDom"])(domSelection, editor);
                    if (newSelection) {
                        newSelection.anchor.set(tableNode.getKey(), selection.isBackward() ? tableNode.getChildrenSize() : 0, 'element');
                        domSelection.removeAllRanges();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(newSelection);
                    }
                }
            }
        }
        if (selection && !selection.is(prevSelection) && ($isTableSelection(selection) || $isTableSelection(prevSelection)) && tableObserver.tableSelection && !tableObserver.tableSelection.is(prevSelection)) {
            if ($isTableSelection(selection) && selection.tableKey === tableObserver.tableNodeKey) {
                tableObserver.$updateTableTableSelection(selection);
            } else if (!$isTableSelection(selection) && $isTableSelection(prevSelection) && prevSelection.tableKey === tableObserver.tableNodeKey) {
                tableObserver.$updateTableTableSelection(null);
            }
            return false;
        }
        if (tableObserver.hasHijackedSelectionStyles && !tableNode.isSelected()) {
            $removeHighlightStyleToTable(editor, tableObserver);
        } else if (!tableObserver.hasHijackedSelectionStyles && tableNode.isSelected()) {
            $addHighlightStyleToTable(editor, tableObserver);
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
    tableObserver.listenersToRemove.add(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_PARAGRAPH_COMMAND"], ()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) || !selection.isCollapsed() || !$isSelectionInTable(selection, tableNode)) {
            return false;
        }
        const edgePosition = $getTableEdgeCursorPosition(editor, selection, tableNode);
        if (edgePosition) {
            $insertParagraphAtTableEdge(edgePosition, tableNode);
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
    return tableObserver;
}
function detatchTableObserverFromTableElement(tableElement, tableObserver) {
    if (getTableObserverFromTableElement(tableElement) === tableObserver) {
        delete tableElement[LEXICAL_ELEMENT_KEY];
    }
}
function attachTableObserverToTableElement(tableElement, tableObserver) {
    if (!(getTableObserverFromTableElement(tableElement) === null)) {
        throw Error(`tableElement already has an attached TableObserver`);
    }
    tableElement[LEXICAL_ELEMENT_KEY] = tableObserver;
}
function getTableObserverFromTableElement(tableElement) {
    return tableElement[LEXICAL_ELEMENT_KEY] || null;
}
function getDOMCellFromTarget(node) {
    let currentNode = node;
    while(currentNode != null){
        const nodeName = currentNode.nodeName;
        if (nodeName === 'TD' || nodeName === 'TH') {
            // @ts-expect-error: internal field
            const cell = currentNode._cell;
            if (cell === undefined) {
                return null;
            }
            return cell;
        }
        currentNode = currentNode.parentNode;
    }
    return null;
}
function getTable(tableNode, dom) {
    const tableElement = getTableElement(tableNode, dom);
    const domRows = [];
    const grid = {
        columns: 0,
        domRows,
        rows: 0
    };
    let currentNode = tableElement.querySelector('tr');
    let x = 0;
    let y = 0;
    domRows.length = 0;
    while(currentNode != null){
        const nodeMame = currentNode.nodeName;
        if (nodeMame === 'TD' || nodeMame === 'TH') {
            const elem = currentNode;
            const cell = {
                elem,
                hasBackgroundColor: elem.style.backgroundColor !== '',
                highlighted: false,
                x,
                y
            };
            // @ts-expect-error: internal field
            currentNode._cell = cell;
            let row = domRows[y];
            if (row === undefined) {
                row = domRows[y] = [];
            }
            row[x] = cell;
        } else {
            const child = currentNode.firstChild;
            if (child != null) {
                currentNode = child;
                continue;
            }
        }
        const sibling = currentNode.nextSibling;
        if (sibling != null) {
            x++;
            currentNode = sibling;
            continue;
        }
        const parent = currentNode.parentNode;
        if (parent != null) {
            const parentSibling = parent.nextSibling;
            if (parentSibling == null) {
                break;
            }
            y++;
            x = 0;
            currentNode = parentSibling;
        }
    }
    grid.columns = x + 1;
    grid.rows = y + 1;
    return grid;
}
function $updateDOMForSelection(editor, table, selection) {
    const selectedCellNodes = new Set(selection ? selection.getNodes() : []);
    $forEachTableCell(table, (cell, lexicalNode)=>{
        const elem = cell.elem;
        if (selectedCellNodes.has(lexicalNode)) {
            cell.highlighted = true;
            $addHighlightToDOM(editor, cell);
        } else {
            cell.highlighted = false;
            $removeHighlightFromDOM(editor, cell);
            if (!elem.getAttribute('style')) {
                elem.removeAttribute('style');
            }
        }
    });
}
function $forEachTableCell(grid, cb) {
    const { domRows } = grid;
    for(let y = 0; y < domRows.length; y++){
        const row = domRows[y];
        if (!row) {
            continue;
        }
        for(let x = 0; x < row.length; x++){
            const cell = row[x];
            if (!cell) {
                continue;
            }
            const lexicalNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(cell.elem);
            if (lexicalNode !== null) {
                cb(cell, lexicalNode, {
                    x,
                    y
                });
            }
        }
    }
}
function $addHighlightStyleToTable(editor, tableSelection) {
    tableSelection.$disableHighlightStyle();
    $forEachTableCell(tableSelection.table, (cell)=>{
        cell.highlighted = true;
        $addHighlightToDOM(editor, cell);
    });
}
function $removeHighlightStyleToTable(editor, tableObserver) {
    tableObserver.$enableHighlightStyle();
    $forEachTableCell(tableObserver.table, (cell)=>{
        const elem = cell.elem;
        cell.highlighted = false;
        $removeHighlightFromDOM(editor, cell);
        if (!elem.getAttribute('style')) {
            elem.removeAttribute('style');
        }
    });
}
function $selectAdjacentCell(tableCellNode, direction) {
    const siblingMethod = direction === 'next' ? 'getNextSibling' : 'getPreviousSibling';
    const childMethod = direction === 'next' ? 'getFirstChild' : 'getLastChild';
    const sibling = tableCellNode[siblingMethod]();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(sibling)) {
        return sibling.selectEnd();
    }
    const parentRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(tableCellNode, $isTableRowNode);
    if (!(parentRow !== null)) {
        throw Error(`selectAdjacentCell: Cell not in table row`);
    }
    for(let nextRow = parentRow[siblingMethod](); $isTableRowNode(nextRow); nextRow = nextRow[siblingMethod]()){
        const child = nextRow[childMethod]();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(child)) {
            return child.selectEnd();
        }
    }
    const parentTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(parentRow, $isTableNode);
    if (!(parentTable !== null)) {
        throw Error(`selectAdjacentCell: Row not in table`);
    }
    return direction === 'next' ? parentTable.selectNext() : parentTable.selectPrevious();
}
const selectTableNodeInDirection = (tableObserver, tableNode, x, y, direction)=>{
    const isForward = direction === 'forward';
    switch(direction){
        case 'backward':
        case 'forward':
            if (x !== (isForward ? tableObserver.table.columns - 1 : 0)) {
                selectTableCellNode(tableNode.getCellNodeFromCordsOrThrow(x + (isForward ? 1 : -1), y, tableObserver.table), isForward);
            } else {
                if (y !== (isForward ? tableObserver.table.rows - 1 : 0)) {
                    selectTableCellNode(tableNode.getCellNodeFromCordsOrThrow(isForward ? 0 : tableObserver.table.columns - 1, y + (isForward ? 1 : -1), tableObserver.table), isForward);
                } else if (!isForward) {
                    tableNode.selectPrevious();
                } else {
                    tableNode.selectNext();
                }
            }
            return true;
        case 'up':
            if (y !== 0) {
                selectTableCellNode(tableNode.getCellNodeFromCordsOrThrow(x, y - 1, tableObserver.table), false);
            } else {
                tableNode.selectPrevious();
            }
            return true;
        case 'down':
            if (y !== tableObserver.table.rows - 1) {
                selectTableCellNode(tableNode.getCellNodeFromCordsOrThrow(x, y + 1, tableObserver.table), true);
            } else {
                tableNode.selectNext();
            }
            return true;
        default:
            return false;
    }
};
function getCorner(rect, cellValue) {
    let colName;
    let rowName;
    if (cellValue.startColumn === rect.minColumn) {
        colName = 'minColumn';
    } else if (cellValue.startColumn + cellValue.cell.__colSpan - 1 === rect.maxColumn) {
        colName = 'maxColumn';
    } else {
        return null;
    }
    if (cellValue.startRow === rect.minRow) {
        rowName = 'minRow';
    } else if (cellValue.startRow + cellValue.cell.__rowSpan - 1 === rect.maxRow) {
        rowName = 'maxRow';
    } else {
        return null;
    }
    return [
        colName,
        rowName
    ];
}
function getCornerOrThrow(rect, cellValue) {
    const corner = getCorner(rect, cellValue);
    if (!(corner !== null)) {
        throw Error(`getCornerOrThrow: cell ${cellValue.cell.getKey()} is not at a corner of rect`);
    }
    return corner;
}
function oppositeCorner([colName, rowName]) {
    return [
        colName === 'minColumn' ? 'maxColumn' : 'minColumn',
        rowName === 'minRow' ? 'maxRow' : 'minRow'
    ];
}
function cellAtCornerOrThrow(tableMap, rect, [colName, rowName]) {
    const rowNum = rect[rowName];
    const rowMap = tableMap[rowNum];
    if (!(rowMap !== undefined)) {
        throw Error(`cellAtCornerOrThrow: ${rowName} = ${String(rowNum)} missing in tableMap`);
    }
    const colNum = rect[colName];
    const cell = rowMap[colNum];
    if (!(cell !== undefined)) {
        throw Error(`cellAtCornerOrThrow: ${colName} = ${String(colNum)} missing in tableMap`);
    }
    return cell;
}
function $extractRectCorners(tableMap, anchorCellValue, newFocusCellValue) {
    // We are sure that the focus now either contracts or expands the rect
    // but both the anchor and focus might be moved to ensure a rectangle
    // given a potentially ragged merge shape
    const rect = $computeTableCellRectBoundary(tableMap, anchorCellValue, newFocusCellValue);
    const anchorCorner = getCorner(rect, anchorCellValue);
    if (anchorCorner) {
        return [
            cellAtCornerOrThrow(tableMap, rect, anchorCorner),
            cellAtCornerOrThrow(tableMap, rect, oppositeCorner(anchorCorner))
        ];
    }
    const newFocusCorner = getCorner(rect, newFocusCellValue);
    if (newFocusCorner) {
        return [
            cellAtCornerOrThrow(tableMap, rect, oppositeCorner(newFocusCorner)),
            cellAtCornerOrThrow(tableMap, rect, newFocusCorner)
        ];
    }
    // TODO this doesn't have to be arbitrary, use the closest corner instead
    const newAnchorCorner = [
        'minColumn',
        'minRow'
    ];
    return [
        cellAtCornerOrThrow(tableMap, rect, newAnchorCorner),
        cellAtCornerOrThrow(tableMap, rect, oppositeCorner(newAnchorCorner))
    ];
}
function $adjustFocusInDirection(tableObserver, tableMap, anchorCellValue, focusCellValue, direction) {
    const rect = $computeTableCellRectBoundary(tableMap, anchorCellValue, focusCellValue);
    const spans = $computeTableCellRectSpans(tableMap, rect);
    const { topSpan, leftSpan, bottomSpan, rightSpan } = spans;
    const anchorCorner = getCornerOrThrow(rect, anchorCellValue);
    const [focusColumn, focusRow] = oppositeCorner(anchorCorner);
    let fCol = rect[focusColumn];
    let fRow = rect[focusRow];
    if (direction === 'forward') {
        fCol += focusColumn === 'maxColumn' ? 1 : leftSpan;
    } else if (direction === 'backward') {
        fCol -= focusColumn === 'minColumn' ? 1 : rightSpan;
    } else if (direction === 'down') {
        fRow += focusRow === 'maxRow' ? 1 : topSpan;
    } else if (direction === 'up') {
        fRow -= focusRow === 'minRow' ? 1 : bottomSpan;
    }
    const targetRowMap = tableMap[fRow];
    if (targetRowMap === undefined) {
        return false;
    }
    const newFocusCellValue = targetRowMap[fCol];
    if (newFocusCellValue === undefined) {
        return false;
    }
    // We can be certain that anchorCellValue and newFocusCellValue are
    // contained within the desired selection, but we are not certain if
    // they need to be expanded or not to maintain a rectangular shape
    const [finalAnchorCell, finalFocusCell] = $extractRectCorners(tableMap, anchorCellValue, newFocusCellValue);
    const anchorDOM = $getObserverCellFromCellNodeOrThrow(tableObserver, finalAnchorCell.cell);
    const focusDOM = $getObserverCellFromCellNodeOrThrow(tableObserver, finalFocusCell.cell);
    tableObserver.$setAnchorCellForSelection(anchorDOM);
    tableObserver.$setFocusCellForSelection(focusDOM, true);
    return true;
}
function $isSelectionInTable(selection, tableNode) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) || $isTableSelection(selection)) {
        const isAnchorInside = tableNode.isParentOf(selection.anchor.getNode());
        const isFocusInside = tableNode.isParentOf(selection.focus.getNode());
        return isAnchorInside && isFocusInside;
    }
    return false;
}
function selectTableCellNode(tableCell, fromStart) {
    if (fromStart) {
        tableCell.selectStart();
    } else {
        tableCell.selectEnd();
    }
}
function $addHighlightToDOM(editor, cell) {
    const element = cell.elem;
    const editorThemeClasses = editor._config.theme;
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(element);
    if (!$isTableCellNode(node)) {
        throw Error(`Expected to find LexicalNode from Table Cell DOMNode`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addClassNamesToElement"])(element, editorThemeClasses.tableCellSelected);
}
function $removeHighlightFromDOM(editor, cell) {
    const element = cell.elem;
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(element);
    if (!$isTableCellNode(node)) {
        throw Error(`Expected to find LexicalNode from Table Cell DOMNode`);
    }
    const editorThemeClasses = editor._config.theme;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["removeClassNamesFromElement"])(element, editorThemeClasses.tableCellSelected);
}
function $findCellNode(node) {
    const cellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(node, $isTableCellNode);
    return $isTableCellNode(cellNode) ? cellNode : null;
}
function $findTableNode(node) {
    const tableNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(node, $isTableNode);
    return $isTableNode(tableNode) ? tableNode : null;
}
function $getBlockParentIfFirstNode(node) {
    for(let prevNode = node, currentNode = node; currentNode !== null; prevNode = currentNode, currentNode = currentNode.getParent()){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode)) {
            if (currentNode !== prevNode && currentNode.getFirstChild() !== prevNode) {
                // Not the first child or the initial node
                return null;
            } else if (!currentNode.isInline()) {
                return currentNode;
            }
        }
    }
    return null;
}
function $handleArrowKey(editor, event, direction, tableNode, tableObserver) {
    if ((direction === 'up' || direction === 'down') && isTypeaheadMenuInView(editor)) {
        return false;
    }
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!$isSelectionInTable(selection, tableNode)) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            if (direction === 'backward') {
                if (selection.focus.offset > 0) {
                    return false;
                }
                const parentNode = $getBlockParentIfFirstNode(selection.focus.getNode());
                if (!parentNode) {
                    return false;
                }
                const siblingNode = parentNode.getPreviousSibling();
                if (!$isTableNode(siblingNode)) {
                    return false;
                }
                stopEvent(event);
                if (event.shiftKey) {
                    selection.focus.set(siblingNode.getParentOrThrow().getKey(), siblingNode.getIndexWithinParent(), 'element');
                } else {
                    siblingNode.selectEnd();
                }
                return true;
            } else if (event.shiftKey && (direction === 'up' || direction === 'down')) {
                const focusNode = selection.focus.getNode();
                const isTableUnselect = !selection.isCollapsed() && (direction === 'up' && !selection.isBackward() || direction === 'down' && selection.isBackward());
                if (isTableUnselect) {
                    let focusParentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(focusNode, (n)=>$isTableNode(n));
                    if ($isTableCellNode(focusParentNode)) {
                        focusParentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(focusParentNode, $isTableNode);
                    }
                    if (focusParentNode !== tableNode) {
                        return false;
                    }
                    if (!focusParentNode) {
                        return false;
                    }
                    const sibling = direction === 'down' ? focusParentNode.getNextSibling() : focusParentNode.getPreviousSibling();
                    if (!sibling) {
                        return false;
                    }
                    let newOffset = 0;
                    if (direction === 'up') {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(sibling)) {
                            newOffset = sibling.getChildrenSize();
                        }
                    }
                    let newFocusNode = sibling;
                    if (direction === 'up') {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(sibling)) {
                            const lastCell = sibling.getLastChild();
                            newFocusNode = lastCell ? lastCell : sibling;
                            newOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(newFocusNode) ? newFocusNode.getTextContentSize() : 0;
                        }
                    }
                    const newSelection = selection.clone();
                    newSelection.focus.set(newFocusNode.getKey(), newOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(newFocusNode) ? 'text' : 'element');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(newSelection);
                    stopEvent(event);
                    return true;
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(focusNode)) {
                    const selectedNode = direction === 'up' ? selection.getNodes()[selection.getNodes().length - 1] : selection.getNodes()[0];
                    if (selectedNode) {
                        const tableCellNode = $findParentTableCellNodeInTable(tableNode, selectedNode);
                        if (tableCellNode !== null) {
                            const firstDescendant = tableNode.getFirstDescendant();
                            const lastDescendant = tableNode.getLastDescendant();
                            if (!firstDescendant || !lastDescendant) {
                                return false;
                            }
                            const [firstCellNode] = $getNodeTriplet(firstDescendant);
                            const [lastCellNode] = $getNodeTriplet(lastDescendant);
                            const firstCellCoords = tableNode.getCordsFromCellNode(firstCellNode, tableObserver.table);
                            const lastCellCoords = tableNode.getCordsFromCellNode(lastCellNode, tableObserver.table);
                            const firstCellDOM = tableNode.getDOMCellFromCordsOrThrow(firstCellCoords.x, firstCellCoords.y, tableObserver.table);
                            const lastCellDOM = tableNode.getDOMCellFromCordsOrThrow(lastCellCoords.x, lastCellCoords.y, tableObserver.table);
                            tableObserver.$setAnchorCellForSelection(firstCellDOM);
                            tableObserver.$setFocusCellForSelection(lastCellDOM, true);
                            return true;
                        }
                    }
                    return false;
                } else {
                    let focusParentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(focusNode, (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(n) && !n.isInline());
                    if ($isTableCellNode(focusParentNode)) {
                        focusParentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(focusParentNode, $isTableNode);
                    }
                    if (!focusParentNode) {
                        return false;
                    }
                    const sibling = direction === 'down' ? focusParentNode.getNextSibling() : focusParentNode.getPreviousSibling();
                    if ($isTableNode(sibling) && tableObserver.tableNodeKey === sibling.getKey()) {
                        const firstDescendant = sibling.getFirstDescendant();
                        const lastDescendant = sibling.getLastDescendant();
                        if (!firstDescendant || !lastDescendant) {
                            return false;
                        }
                        const [firstCellNode] = $getNodeTriplet(firstDescendant);
                        const [lastCellNode] = $getNodeTriplet(lastDescendant);
                        const newSelection = selection.clone();
                        newSelection.focus.set((direction === 'up' ? firstCellNode : lastCellNode).getKey(), direction === 'up' ? 0 : lastCellNode.getChildrenSize(), 'element');
                        stopEvent(event);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(newSelection);
                        return true;
                    }
                }
            }
        }
        if (direction === 'down' && $isScrollableTablesActive(editor)) {
            // Enable Firefox workaround
            tableObserver.setShouldCheckSelection();
        }
        return false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed()) {
        const { anchor, focus } = selection;
        const anchorCellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(anchor.getNode(), $isTableCellNode);
        const focusCellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(focus.getNode(), $isTableCellNode);
        if (!$isTableCellNode(anchorCellNode) || !anchorCellNode.is(focusCellNode)) {
            return false;
        }
        const anchorCellTable = $findTableNode(anchorCellNode);
        if (anchorCellTable !== tableNode && anchorCellTable != null) {
            const anchorCellTableElement = getTableElement(anchorCellTable, editor.getElementByKey(anchorCellTable.getKey()));
            if (anchorCellTableElement != null) {
                tableObserver.table = getTable(anchorCellTable, anchorCellTableElement);
                return $handleArrowKey(editor, event, direction, anchorCellTable, tableObserver);
            }
        }
        if (direction === 'backward' || direction === 'forward') {
            const anchorType = anchor.type;
            const anchorOffset = anchor.offset;
            const anchorNode = anchor.getNode();
            if (!anchorNode) {
                return false;
            }
            const selectedNodes = selection.getNodes();
            if (selectedNodes.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(selectedNodes[0])) {
                return false;
            }
            if (isExitingTableAnchor(anchorType, anchorOffset, anchorNode, direction)) {
                return $handleTableExit(event, anchorNode, anchorCellNode, tableNode, direction);
            }
            return false;
        }
        const anchorCellDom = editor.getElementByKey(anchorCellNode.__key);
        const anchorDOM = editor.getElementByKey(anchor.key);
        if (anchorDOM == null || anchorCellDom == null) {
            return false;
        }
        let edgeSelectionRect;
        if (anchor.type === 'element') {
            edgeSelectionRect = anchorDOM.getBoundingClientRect();
        } else {
            const domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOMSelection"])(getEditorWindow(editor));
            if (domSelection === null || domSelection.rangeCount === 0) {
                return false;
            }
            const range = domSelection.getRangeAt(0);
            edgeSelectionRect = range.getBoundingClientRect();
        }
        const edgeChild = direction === 'up' ? anchorCellNode.getFirstChild() : anchorCellNode.getLastChild();
        if (edgeChild == null) {
            return false;
        }
        const edgeChildDOM = editor.getElementByKey(edgeChild.__key);
        if (edgeChildDOM == null) {
            return false;
        }
        const edgeRect = edgeChildDOM.getBoundingClientRect();
        const isExiting = direction === 'up' ? edgeRect.top > edgeSelectionRect.top - edgeSelectionRect.height : edgeSelectionRect.bottom + edgeSelectionRect.height > edgeRect.bottom;
        if (isExiting) {
            stopEvent(event);
            const cords = tableNode.getCordsFromCellNode(anchorCellNode, tableObserver.table);
            if (event.shiftKey) {
                const cell = tableNode.getDOMCellFromCordsOrThrow(cords.x, cords.y, tableObserver.table);
                tableObserver.$setAnchorCellForSelection(cell);
                tableObserver.$setFocusCellForSelection(cell, true);
            } else {
                return selectTableNodeInDirection(tableObserver, tableNode, cords.x, cords.y, direction);
            }
            return true;
        }
    } else if ($isTableSelection(selection)) {
        const { anchor, focus } = selection;
        const anchorCellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(anchor.getNode(), $isTableCellNode);
        const focusCellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(focus.getNode(), $isTableCellNode);
        const [tableNodeFromSelection] = selection.getNodes();
        if (!$isTableNode(tableNodeFromSelection)) {
            throw Error(`$handleArrowKey: TableSelection.getNodes()[0] expected to be TableNode`);
        }
        const tableElement = getTableElement(tableNodeFromSelection, editor.getElementByKey(tableNodeFromSelection.getKey()));
        if (!$isTableCellNode(anchorCellNode) || !$isTableCellNode(focusCellNode) || !$isTableNode(tableNodeFromSelection) || tableElement == null) {
            return false;
        }
        tableObserver.$updateTableTableSelection(selection);
        const grid = getTable(tableNodeFromSelection, tableElement);
        const cordsAnchor = tableNode.getCordsFromCellNode(anchorCellNode, grid);
        const anchorCell = tableNode.getDOMCellFromCordsOrThrow(cordsAnchor.x, cordsAnchor.y, grid);
        tableObserver.$setAnchorCellForSelection(anchorCell);
        stopEvent(event);
        if (event.shiftKey) {
            const [tableMap, anchorValue, focusValue] = $computeTableMap(tableNode, anchorCellNode, focusCellNode);
            return $adjustFocusInDirection(tableObserver, tableMap, anchorValue, focusValue, direction);
        } else {
            focusCellNode.selectEnd();
        }
        return true;
    }
    return false;
}
function stopEvent(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
}
function isTypeaheadMenuInView(editor) {
    // There is no inbuilt way to check if the component picker is in view
    // but we can check if the root DOM element has the aria-controls attribute "typeahead-menu".
    const root = editor.getRootElement();
    if (!root) {
        return false;
    }
    return root.hasAttribute('aria-controls') && root.getAttribute('aria-controls') === 'typeahead-menu';
}
function isExitingTableAnchor(type, offset, anchorNode, direction) {
    return isExitingTableElementAnchor(type, anchorNode, direction) || $isExitingTableTextAnchor(type, offset, anchorNode, direction);
}
function isExitingTableElementAnchor(type, anchorNode, direction) {
    return type === 'element' && (direction === 'backward' ? anchorNode.getPreviousSibling() === null : anchorNode.getNextSibling() === null);
}
function $isExitingTableTextAnchor(type, offset, anchorNode, direction) {
    const parentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(anchorNode, (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(n) && !n.isInline());
    if (!parentNode) {
        return false;
    }
    const hasValidOffset = direction === 'backward' ? offset === 0 : offset === anchorNode.getTextContentSize();
    return type === 'text' && hasValidOffset && (direction === 'backward' ? parentNode.getPreviousSibling() === null : parentNode.getNextSibling() === null);
}
function $handleTableExit(event, anchorNode, anchorCellNode, tableNode, direction) {
    const [tableMap, cellValue] = $computeTableMap(tableNode, anchorCellNode, anchorCellNode);
    if (!isExitingCell(tableMap, cellValue, direction)) {
        return false;
    }
    const toNode = $getExitingToNode(anchorNode, direction, tableNode);
    if (!toNode || $isTableNode(toNode)) {
        return false;
    }
    stopEvent(event);
    if (direction === 'backward') {
        toNode.selectEnd();
    } else {
        toNode.selectStart();
    }
    return true;
}
function isExitingCell(tableMap, cellValue, direction) {
    const firstCell = tableMap[0][0];
    const lastCell = tableMap[tableMap.length - 1][tableMap[0].length - 1];
    const { startColumn, startRow } = cellValue;
    return direction === 'backward' ? startColumn === firstCell.startColumn && startRow === firstCell.startRow : startColumn === lastCell.startColumn && startRow === lastCell.startRow;
}
function $getExitingToNode(anchorNode, direction, tableNode) {
    const parentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(anchorNode, (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(n) && !n.isInline());
    if (!parentNode) {
        return undefined;
    }
    const anchorSibling = direction === 'backward' ? parentNode.getPreviousSibling() : parentNode.getNextSibling();
    return anchorSibling && $isTableNode(anchorSibling) ? anchorSibling : direction === 'backward' ? tableNode.getPreviousSibling() : tableNode.getNextSibling();
}
function $insertParagraphAtTableEdge(edgePosition, tableNode, children) {
    const paragraphNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
    if (edgePosition === 'first') {
        tableNode.insertBefore(paragraphNode);
    } else {
        tableNode.insertAfter(paragraphNode);
    }
    paragraphNode.append(...children || []);
    paragraphNode.selectEnd();
}
function $getTableEdgeCursorPosition(editor, selection, tableNode) {
    const tableNodeParent = tableNode.getParent();
    if (!tableNodeParent) {
        return undefined;
    }
    // TODO: Add support for nested tables
    const domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOMSelection"])(getEditorWindow(editor));
    if (!domSelection) {
        return undefined;
    }
    const domAnchorNode = domSelection.anchorNode;
    const tableNodeParentDOM = editor.getElementByKey(tableNodeParent.getKey());
    const tableElement = getTableElement(tableNode, editor.getElementByKey(tableNode.getKey()));
    // We are only interested in the scenario where the
    // native selection anchor is:
    // - at or inside the table's parent DOM
    // - and NOT at or inside the table DOM
    // It may be adjacent to the table DOM (e.g. in a wrapper)
    if (!domAnchorNode || !tableNodeParentDOM || !tableElement || !tableNodeParentDOM.contains(domAnchorNode) || tableElement.contains(domAnchorNode)) {
        return undefined;
    }
    const anchorCellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(selection.anchor.getNode(), (n)=>$isTableCellNode(n));
    if (!anchorCellNode) {
        return undefined;
    }
    const parentTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$findMatchingParent"])(anchorCellNode, (n)=>$isTableNode(n));
    if (!$isTableNode(parentTable) || !parentTable.is(tableNode)) {
        return undefined;
    }
    const [tableMap, cellValue] = $computeTableMap(tableNode, anchorCellNode, anchorCellNode);
    const firstCell = tableMap[0][0];
    const lastCell = tableMap[tableMap.length - 1][tableMap[0].length - 1];
    const { startRow, startColumn } = cellValue;
    const isAtFirstCell = startRow === firstCell.startRow && startColumn === firstCell.startColumn;
    const isAtLastCell = startRow === lastCell.startRow && startColumn === lastCell.startColumn;
    if (isAtFirstCell) {
        return 'first';
    } else if (isAtLastCell) {
        return 'last';
    } else {
        return undefined;
    }
}
function $getObserverCellFromCellNodeOrThrow(tableObserver, tableCellNode) {
    const { tableNode } = tableObserver.$lookup();
    const currentCords = tableNode.getCordsFromCellNode(tableCellNode, tableObserver.table);
    return tableNode.getDOMCellFromCordsOrThrow(currentCords.x, currentCords.y, tableObserver.table);
}
function $getNearestTableCellInTableFromDOMNode(tableNode, startingDOM, editorState) {
    return $findParentTableCellNodeInTable(tableNode, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(startingDOM, editorState));
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function updateColgroup(dom, config, colCount, colWidths) {
    const colGroup = dom.querySelector('colgroup');
    if (!colGroup) {
        return;
    }
    const cols = [];
    for(let i = 0; i < colCount; i++){
        const col = document.createElement('col');
        const width = colWidths && colWidths[i];
        if (width) {
            col.style.width = `${width}px`;
        }
        cols.push(col);
    }
    colGroup.replaceChildren(...cols);
}
function setRowStriping(dom, config, rowStriping) {
    if (rowStriping) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addClassNamesToElement"])(dom, config.theme.tableRowStriping);
        dom.setAttribute('data-lexical-row-striping', 'true');
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["removeClassNamesFromElement"])(dom, config.theme.tableRowStriping);
        dom.removeAttribute('data-lexical-row-striping');
    }
}
const scrollableEditors = new WeakSet();
function $isScrollableTablesActive(editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getEditor"])()) {
    return scrollableEditors.has(editor);
}
function setScrollableTablesActive(editor, active) {
    if (active) {
        if (!editor._config.theme.tableScrollableWrapper) {
            console.warn('TableNode: hasHorizontalScroll is active but theme.tableScrollableWrapper is not defined.');
        }
        scrollableEditors.add(editor);
    } else {
        scrollableEditors.delete(editor);
    }
}
/** @noInheritDoc */ class TableNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementNode"] {
    /** @internal */ static getType() {
        return 'table';
    }
    getColWidths() {
        const self = this.getLatest();
        return self.__colWidths;
    }
    setColWidths(colWidths) {
        const self = this.getWritable();
        // NOTE: Node properties should be immutable. Freeze to prevent accidental mutation.
        self.__colWidths = Object.freeze(colWidths);
        return self;
    }
    static clone(node) {
        return new TableNode(node.__key);
    }
    afterCloneFrom(prevNode) {
        super.afterCloneFrom(prevNode);
        this.__colWidths = prevNode.__colWidths;
        this.__rowStriping = prevNode.__rowStriping;
    }
    static importDOM() {
        return {
            table: (_node)=>({
                    conversion: $convertTableElement,
                    priority: 1
                })
        };
    }
    static importJSON(serializedNode) {
        const tableNode = $createTableNode();
        tableNode.__rowStriping = serializedNode.rowStriping || false;
        tableNode.__colWidths = serializedNode.colWidths;
        return tableNode;
    }
    constructor(key){
        super(key);
        this.__rowStriping = false;
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            colWidths: this.getColWidths(),
            rowStriping: this.__rowStriping ? this.__rowStriping : undefined,
            type: 'table',
            version: 1
        };
    }
    extractWithChild(child, selection, destination) {
        return destination === 'html';
    }
    getDOMSlot(element) {
        const tableElement = element.nodeName !== 'TABLE' && element.querySelector('table') || element;
        if (!(tableElement.nodeName === 'TABLE')) {
            throw Error(`TableNode.getDOMSlot: createDOM() did not return a table`);
        }
        return super.getDOMSlot(tableElement).withAfter(tableElement.querySelector('colgroup'));
    }
    createDOM(config, editor) {
        const tableElement = document.createElement('table');
        const colGroup = document.createElement('colgroup');
        tableElement.appendChild(colGroup);
        updateColgroup(tableElement, config, this.getColumnCount(), this.getColWidths());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDOMUnmanaged"])(colGroup);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addClassNamesToElement"])(tableElement, config.theme.table);
        if (this.__rowStriping) {
            setRowStriping(tableElement, config, true);
        }
        if ($isScrollableTablesActive(editor)) {
            const wrapperElement = document.createElement('div');
            const classes = config.theme.tableScrollableWrapper;
            if (classes) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lexical$2b$utils$40$0$2e$21$2e$0$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addClassNamesToElement"])(wrapperElement, classes);
            } else {
                wrapperElement.style.cssText = 'overflow-x: auto;';
            }
            wrapperElement.appendChild(tableElement);
            return wrapperElement;
        }
        return tableElement;
    }
    updateDOM(prevNode, dom, config) {
        if (prevNode.__rowStriping !== this.__rowStriping) {
            setRowStriping(dom, config, this.__rowStriping);
        }
        updateColgroup(dom, config, this.getColumnCount(), this.getColWidths());
        return false;
    }
    exportDOM(editor) {
        const superExport = super.exportDOM(editor);
        const { element } = superExport;
        return {
            after: (tableElement)=>{
                if (superExport.after) {
                    tableElement = superExport.after(tableElement);
                }
                if (tableElement && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(tableElement) && tableElement.nodeName !== 'TABLE') {
                    tableElement = tableElement.querySelector('table');
                }
                if (!tableElement || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(tableElement)) {
                    return null;
                }
                // Scan the table map to build a map of table cell key to the columns it needs
                const [tableMap] = $computeTableMapSkipCellCheck(this, null, null);
                const cellValues = new Map();
                for (const mapRow of tableMap){
                    for (const mapValue of mapRow){
                        const key = mapValue.cell.getKey();
                        if (!cellValues.has(key)) {
                            cellValues.set(key, {
                                colSpan: mapValue.cell.getColSpan(),
                                startColumn: mapValue.startColumn
                            });
                        }
                    }
                }
                // scan the DOM to find the table cell keys that were used and mark those columns
                const knownColumns = new Set();
                for (const cellDOM of tableElement.querySelectorAll(':scope > tr > [data-temporary-table-cell-lexical-key]')){
                    const key = cellDOM.getAttribute('data-temporary-table-cell-lexical-key');
                    if (key) {
                        const cellSpan = cellValues.get(key);
                        cellDOM.removeAttribute('data-temporary-table-cell-lexical-key');
                        if (cellSpan) {
                            cellValues.delete(key);
                            for(let i = 0; i < cellSpan.colSpan; i++){
                                knownColumns.add(i + cellSpan.startColumn);
                            }
                        }
                    }
                }
                // Compute the colgroup and columns in the export
                const colGroup = tableElement.querySelector(':scope > colgroup');
                if (colGroup) {
                    // Only include the <col /> for rows that are in the output
                    const cols = Array.from(tableElement.querySelectorAll(':scope > colgroup > col')).filter((dom, i)=>knownColumns.has(i));
                    colGroup.replaceChildren(...cols);
                }
                // Wrap direct descendant rows in a tbody for export
                const rows = tableElement.querySelectorAll(':scope > tr');
                if (rows.length > 0) {
                    const tBody = document.createElement('tbody');
                    for (const row of rows){
                        tBody.appendChild(row);
                    }
                    tableElement.append(tBody);
                }
                return tableElement;
            },
            element: element && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && element.nodeName !== 'TABLE' ? element.querySelector('table') : element
        };
    }
    canBeEmpty() {
        return false;
    }
    isShadowRoot() {
        return true;
    }
    getCordsFromCellNode(tableCellNode, table) {
        const { rows, domRows } = table;
        for(let y = 0; y < rows; y++){
            const row = domRows[y];
            if (row == null) {
                continue;
            }
            for(let x = 0; x < row.length; x++){
                const cell = row[x];
                if (cell == null) {
                    continue;
                }
                const { elem } = cell;
                const cellNode = $getNearestTableCellInTableFromDOMNode(this, elem);
                if (cellNode !== null && tableCellNode.is(cellNode)) {
                    return {
                        x,
                        y
                    };
                }
            }
        }
        throw new Error('Cell not found in table.');
    }
    getDOMCellFromCords(x, y, table) {
        const { domRows } = table;
        const row = domRows[y];
        if (row == null) {
            return null;
        }
        const index = x < row.length ? x : row.length - 1;
        const cell = row[index];
        if (cell == null) {
            return null;
        }
        return cell;
    }
    getDOMCellFromCordsOrThrow(x, y, table) {
        const cell = this.getDOMCellFromCords(x, y, table);
        if (!cell) {
            throw new Error('Cell not found at cords.');
        }
        return cell;
    }
    getCellNodeFromCords(x, y, table) {
        const cell = this.getDOMCellFromCords(x, y, table);
        if (cell == null) {
            return null;
        }
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(cell.elem);
        if ($isTableCellNode(node)) {
            return node;
        }
        return null;
    }
    getCellNodeFromCordsOrThrow(x, y, table) {
        const node = this.getCellNodeFromCords(x, y, table);
        if (!node) {
            throw new Error('Node at cords not TableCellNode.');
        }
        return node;
    }
    getRowStriping() {
        return Boolean(this.getLatest().__rowStriping);
    }
    setRowStriping(newRowStriping) {
        this.getWritable().__rowStriping = newRowStriping;
    }
    canSelectBefore() {
        return true;
    }
    canIndent() {
        return false;
    }
    getColumnCount() {
        const firstRow = this.getFirstChild();
        if (!firstRow) {
            return 0;
        }
        let columnCount = 0;
        firstRow.getChildren().forEach((cell)=>{
            if ($isTableCellNode(cell)) {
                columnCount += cell.getColSpan();
            }
        });
        return columnCount;
    }
}
function $getElementForTableNode(editor, tableNode) {
    const tableElement = editor.getElementByKey(tableNode.getKey());
    if (!(tableElement !== null)) {
        throw Error(`$getElementForTableNode: Table Element Not Found`);
    }
    return getTable(tableNode, tableElement);
}
function $convertTableElement(domNode) {
    const tableNode = $createTableNode();
    if (domNode.hasAttribute('data-lexical-row-striping')) {
        tableNode.setRowStriping(true);
    }
    const colGroup = domNode.querySelector(':scope > colgroup');
    if (colGroup) {
        let columns = [];
        for (const col of colGroup.querySelectorAll(':scope > col')){
            const width = col.style.width;
            if (!width || !PIXEL_VALUE_REG_EXP.test(width)) {
                columns = undefined;
                break;
            }
            columns.push(parseFloat(width));
        }
        if (columns) {
            tableNode.setColWidths(columns);
        }
    }
    return {
        node: tableNode
    };
}
function $createTableNode() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lexical$40$0$2e$21$2e$0$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$applyNodeReplacement"])(new TableNode());
}
function $isTableNode(node) {
    return node instanceof TableNode;
}
;
}}),
}]);

//# sourceMappingURL=d64f1_%40lexical_table_LexicalTable_dev_mjs_53d7a4._.js.map