import { resizeImage } from './resize-image';

export async function resizeBase64Image(base64OrUrl: string): Promise<string> {
  if (!base64OrUrl.startsWith('data:')) {
    return base64OrUrl;
  }

  const mimeMatch = base64OrUrl.match(/^data:(\w+\/\w+);/);
  const mimetype = mimeMatch?.[1];
  if (!mimetype) {
    throw new Error(`Could not distinguish mimetype`);
  }

  const buffer = Buffer.from(
    base64OrUrl.replace(/^data:image\/\w+;base64,/, ''),
    'base64'
  );
  const newBuffer = await resizeImage(buffer, mimetype);

  return `data:${mimetype};base64,${newBuffer.toString('base64')}`;
}
