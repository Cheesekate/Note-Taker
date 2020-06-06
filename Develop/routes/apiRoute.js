const fs = require("fs");

module.exports = function (app) {
    app.get("/notes", function (req, res) {
        fs.readFile("db/db.json", (err, data) => {
            let currentData = req.body;
            let parseNote = JSON.parse(data);
            parseNote.push(currentData);
            fs.writeFile("db/db.json", JSON.stringify(parseNote, null, 2), err => {
                if (err) throw err;
                res.send(req.body)
            })
        })
    })
    app.delete("/notes", function (req, res) {
        fs.readFile("db/db.json", (err, data) => {
            let parseNote = JSON.parse(data);
            let savedNote = parseNote.filter(item => item.id != req.params.id);
            fs.writeFile("db/db.json", JSON.stringify(savedNote, null, 2), err => {
                if (err) throw err;
                res.send(req.body)
            })
        })
    })
};