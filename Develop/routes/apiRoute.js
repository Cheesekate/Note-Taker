const fs = require("fs");
module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile("etc/password", (err, data) => {
            if (err) throw err;
            console.log(data);
        });
        res.json(waitListData);

        app.post("api/notes", function (req, res) {
            false.appendFile(".db/db.json", "data to append", (err) => {
                if (err) throw err;
                console.log('Note has appeneded.');
            });
        });
    });
}