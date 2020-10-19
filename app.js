const knexfile = require("./knexfile");
const knex = require('knex')({
    client: 'postgres',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'wordpass1',
      database : 'solo_api'
    }
  });

const users = knex.select().table("users").
then((rows) => {
    console.log(rows);
});

console.log(users);

const express = require("express");

const app = express();

app.use(express.static("./"));

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(5000, () => {
    console.log("Listening @ 5000");
})