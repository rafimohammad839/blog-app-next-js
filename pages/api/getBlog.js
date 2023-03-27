// http://localhost:3000/api/getBlog?slug=how-to-learn-javascript

import fs from 'fs';

export default function handler(req, res) {
  
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(404).json({error: "No such blog found!"})
    }
    res.status(200).json(JSON.parse(data));
  }); 
}