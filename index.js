const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const swaggerUi = require("swagger-ui-express");

const swaggerDocs = require("./swagger.json");

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const rotaPost = require("./Routes/Posts");
app.use("/posts", rotaPost);
const rotaUsers = require("./Routes/Users");
app.use("/auth", rotaUsers);

app.get("/terms", (req, res) => {
  res.send("Termos de serviço");
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Rodando na porta 3001!");
  });
});
