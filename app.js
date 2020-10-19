const { gql } = require("apollo-server");
const { ApolloServer } = require("apollo-server");
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

const xiongfamily = knex
.select()
.table("xiong_family")
.then((rows) => {
    return rows;
});

console.log(xiongfamily);

const express = require("express");

const app = express();

app.use(express.static("./"));

app.get("/", (req, res) => {
    res.send(xiongfamily);
})

app.listen(5000, () => {
    console.log("Listening @ 5000");
})