const mongoose = require("mongoose");
function connectToDataBase() {
  mongoose.connect(
    "mongodb+srv://icaro:123@cluster0.ryvj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log("db open  🌍 "));
}
module.exports = connectToDataBase;
