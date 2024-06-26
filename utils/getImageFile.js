import fs from 'fs';
import path from 'path';

export function getImageFilenames() {
  const directoryPath = path.join(process.cwd(), 'public', 'imageCardIcons');
  const filenames = fs.readdirSync(directoryPath);
  return filenames.map(filename => `/imageCardIcons/${filename}`);
}
