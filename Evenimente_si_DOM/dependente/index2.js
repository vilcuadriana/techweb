import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';


const dirName = 'exempluDir';
const fileName = 'fisier.txt';
const filePath = path.join(dirName, fileName);


if (!fs.existsSync(dirName)) {
  fs.mkdirSync(dirName);
  console.log(`Director creat: ${dirName}`);
}


fs.writeFileSync(filePath, 'Acesta este un text de test.');
console.log(`Fișier creat: ${filePath}`);


rimraf(dirName, (err) => {
  if (err) {
    console.error('Eroare la ștergere:', err);
  } else {
    console.log(`Directorul ${dirName} a fost șters cu tot conținutul.`);
  }
});
