const express = require("express");

const app = express();

app.use(express.static("./"));

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(5000, () => {
    console.log("Listening @ 5000");
})