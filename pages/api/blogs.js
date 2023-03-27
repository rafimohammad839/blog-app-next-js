// http://localhost:3000/api/blogs

import fs from 'fs';

export default function handler(req, res) {
  fs.readdir("blogdata/", (err, fileNames) => {
    const allFiles = [];
    if (err) {
      console.error(err);
      return;
    }
    fileNames.forEach(function (fileName) {
      const content = fs.readFileSync("blogdata/" + fileName, 'utf-8')
      allFiles.push(JSON.parse(content));
    })
    res.status(200).json(allFiles );
  }); 
}