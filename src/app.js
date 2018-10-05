if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
let mongodb = require("mongodb"),
  assert = require("assert");

// let mongoUrl = 'mongodb://localhost:27017';
let mongoUrl = `${process.env.atlas_base_url}`;

const getDb = next => {
  mongodb.MongoClient.connect(mongoUrl)
    .then(client => {
      console.log("Successfully connected to server");
      // assign the db to use here, instead of using the URL to set the db
      const db = client.db("video");
      next(db);
    })
    .catch(err => console.log(`error found: ${err}`));
};

let showMovieDetails = () =>
  getDb(db => {
    db.collection("movieDetails")
      .find({})
      .toArray((_err, docs) => {
        docs.forEach(doc => {
          console.log(doc.title);
        });
      });
  });

showMovieDetails();
