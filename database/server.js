const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const route = require("./routes");
const connectToDataBase = require("./database");
connectToDataBase();
app.use(cors());
app.use(express.json());
app.use(route);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}🤧 `);
});
