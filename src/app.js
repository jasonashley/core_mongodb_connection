if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
let mongodb = require("mongodb"),
  assert = require("assert");

// let mongoUrl = 'mongodb://localhost:27017';
let mongoUrl = `${process.env.atlas_base_url}`;

mongodb.MongoClient.connect(
  mongoUrl,
  (err, client) => {
    assert.equal(null, err);
    console.log("Successfully connected to server");
    // assign the db to use here, instead of using the URL to set the db
    const db = client.db("video");

    db.collection("movieDetails")
      .find({})
      .toArray((err, docs) => {
        docs.forEach(doc => {
          console.log(doc.title);
        });
      });
  }
);
