const fs = require('fs');
const path = require('path');

const parentDir = path.join(__dirname, '..');
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

try {
  const files = fs.readdirSync(parentDir);
  const screenshot = files.find(f => f.startsWith('Screenshot') && f.endsWith('.png'));

  if (screenshot) {
    const srcPath = path.join(parentDir, screenshot);
    const destPath = path.join(publicDir, 'profile.png');
    fs.copyFileSync(srcPath, destPath);
    console.log(`Successfully copied ${screenshot} to public/profile.png`);
  } else {
    console.error('No Screenshot PNG file found in the parent directory.');
  }
} catch (err) {
  console.error('Error during file copy:', err);
}
