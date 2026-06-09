import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src', 'assets');

const conversions = [
  {
    input: 'hero-vsdox.png',
    output: 'enterprise-document-management-system.webp'
  },
  {
    input: 'headless DMS.png',
    output: 'ai-document-management-software.webp'
  },
  {
    input: 'iso.jpg',
    output: 'iso-certified-document-management-system.webp'
  },
  {
    input: 'cmmi.jpg',
    output: 'cmmi-maturity-level-3-enterprise-content-management-system.webp'
  }
];

async function convert() {
  for (const item of conversions) {
    const inputPath = path.join(srcDir, item.input);
    const outputPath = path.join(srcDir, item.output);
    if (fs.existsSync(inputPath)) {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Converted ${item.input} to ${item.output}`);
      // delete the original
      fs.unlinkSync(inputPath);
    } else {
      console.log(`File not found: ${inputPath}`);
    }
  }
}

convert().catch(console.error);
