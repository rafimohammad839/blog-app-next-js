import * as fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    
    const buffer = JSON.stringify(req.body);
    const currentFiles = fs.readdirSync('contactdata/');

    try {
      fs.writeFileSync(`contactdata/${currentFiles.length + 1}.json`, buffer);
      res.status(200).json({message: "File written successfully."});
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ err: err.message });
    }

    
  } else {
    // Handle any other HTTP method
    res.status(200).json("All Contacts")
  }
}