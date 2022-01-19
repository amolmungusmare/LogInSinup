require("dotenv").config();
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "#Amol441907",
    database: "Details",
  },
});
knex.schema
  .createTable("log", (table) => {
    table.string("userN");
    table.string("password");
  })
  .then(() => {
    console.log("Table is created...");
  })
  .catch((err) => {
    console.log("table already exist !");
  });

module.exports = knex;
