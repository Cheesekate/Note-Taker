const express = require("express");
const path = require("path");
const fs = require("fs");
const apiRoutes = require("./Develop/routes/apiRoute");
const htmlRoutes = require("./Develop/routes/htmlRoute");



const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



app.listen(PORT, function () {
    console.log("App listenting PORT:" + PORT);
});