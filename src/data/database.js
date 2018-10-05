let mongodb = require("mongodb"),
  assert = require("assert");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
let mongoUrl = `${process.env.atlas_base_url}`;
let theDb = null;

module.exports = {
  getDb: async () => {
    if (!theDb) {
      try {
        let client = await mongodb.MongoClient.connect(mongoUrl);
        // assign the db to use here, instead of using the URL to set the db
        theDb = client.db("video");
        return theDb;
      } catch (err) {
        console.log(`error found, reads: ${err}`);
      }
    } else {
      return theDb;
    }
  }
};
