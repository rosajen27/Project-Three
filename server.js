const express = require("express");
const mongoose = require('mongoose')
const app = express();
const Article = require('./Article')

//sets up defualt port
const port = process.env.PORT || 5000;

const connection_URL = 'mongodb+srv://admin:CryuhAngbwyEbs3t@cluster0.mbo1a.mongodb.net/News?retryWrites=true&w=majority';
//Set up mongo connection here
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:CryuhAngbwyEbs3t@cluster0.mbo1a.mongodb.net/News?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//Sets up routes for adding deleteing and retrieving articles
//Add
app.post("/api/article", (req, res) => {
    Article.create(req.body, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  });
  //Retrieve
  app.get("/articles", (req, res) => {
    Article.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });
  //Delete
  app.delete("/delete/:id", (req, res) => {
    Article.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("Book Deleted");
      }
    });
  });


//starts server
app.listen(port, () => console.log(`Listening on localhost:${port}`));
