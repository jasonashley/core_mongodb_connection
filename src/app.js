if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
let mongodb = require("mongodb"),
  assert = require("assert");

// let mongoUrl = 'mongodb://localhost:27017';
let mongoUrl = `${process.env.atlas_base_url}`;

const getDb = async () => {
  try {
    let client = await mongodb.MongoClient.connect(mongoUrl);
    // assign the db to use here, instead of using the URL to set the db
    db = client.db("video");
    return db;
  } catch (err) {
    console.log(`error found, reads: ${err}`);
  }
};

let showMovieDetails = () =>
  getDb()
    .then(db => {
      db.collection("movieDetails")
        .find({})
        .toArray((_err, docs) => {
          docs.forEach(doc => {
            console.log(doc.title);
          });
        });
    })
    .catch(err => "error is " + err);

showMovieDetails();
