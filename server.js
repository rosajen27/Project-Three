const express = require("express");

const app = express();

//sets up defualt port
const port = process.env.PORT || 5000;

//Set up mongo connection here


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
