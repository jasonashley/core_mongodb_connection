let database = require("./data/database");

let showMovieDetails = async () => {
  let theDb = await database.getDb("video");
  let docs = await theDb.db
    .collection("movieDetails")
    .find({})
    .toArray();
  return docs;
};

showMovieDetails()
  .then(docs => {
    docs.forEach(doc => {
      console.log(doc.title);
    });
  })
  .catch(err => console.log(err));
