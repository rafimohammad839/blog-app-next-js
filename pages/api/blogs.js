// http://localhost:3000/api/blogs?count=<number>
import fs from 'fs';

export default function handler(req, res) {
  
  const { count } = req.query;

  fs.readdir("blogdata/", (err, fileNames) => {
    const blogItems = [];
    if (err) {
      console.error(err);
      return;
    }
    for (let i = 0; i < count; i++) {
      const fileName = fileNames[i];
      const content = fs.readFileSync("blogdata/" + fileName, 'utf-8')
      blogItems.push(JSON.parse(content));
    }
    res.status(200).json({ blogItems, length: fileNames.length});
  }); 
}