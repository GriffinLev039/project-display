//add node.js implementation for reading file, and creating array of objects from it.
//Line format:
// Title | Project url | img URL | Description
//split objects by new line
const express = require('express');
const fs = require('fs');



const app = express();
const port = 3000;

const cors = require("cors")
app.use(cors());


const filePath = 'input.txt';

app.get('/data', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('error reading file: ' + err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        const objArr = data.split("\n").map(line => {
            const [name, url, img, desc] = line.split(" | ");
            return { name, url, img, desc };
        });
        res.json(objArr);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 