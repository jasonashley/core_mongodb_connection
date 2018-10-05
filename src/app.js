let database = require("./data/database")

let showMovieDetails = () =>
  database.getDb()
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
