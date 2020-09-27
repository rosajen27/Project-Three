const express = require("express");
const mongoose = require('mongoose')
const app = express();
const Article = require('./Article')

//sets up defualt port
const port = process.env.PORT || 5000;

const connection_URL = 'mongodb+srv://admin:0smZaYLzIQfjmkPk@cluster0.9gu6q.mongodb.net/news?retryWrites=true&w=majority';
//Set up mongo connection here


mongoose.connect(connection_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

//Sets up routes for adding deleteing and retrieving articles
//Add
app.post("/api/article", (req, res) => {
    console.log(req.body)
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
        res.status(200).send("Article Deleted");
      }
    });
  });


//starts server
app.listen(port, () => console.log(`Listening on localhost:${port}`));

