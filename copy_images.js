const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\94d6ff98-bc1f-4d14-b739-ac0ca130445b';
const destDir = 'C:\\Users\\hp\\Desktop\\Auger\\assets';

const files = fs.readdirSync(srcDir);
let i = 1;
for (const file of files) {
  if (file.endsWith('.jpg')) {
    const newName = 'new_cat_' + i + '.jpg';
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, newName));
    console.log(`Copied ${file} to ${newName}`);
    i++;
  }
}
