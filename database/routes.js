require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDataBase = require("./database");
const userSchema = require("./schemas/user.schema");
const port = 8080;

connectToDataBase();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ Icaro: "Lindo" }));
app.post("/user", userSchema);

app.listen(port, () => {
  console.log(`Servidor rodando na porta 8080 🤧 `);
});
