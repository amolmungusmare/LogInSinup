const knex = require("./../connection/connection");
const bcrypt = require("bcrypt");
const { generateToken } = require("../auth/authenticataion");

createAccount = (req, res) => {
  let data = {
    userN: req.body.userN,
    password: req.body.password,
  };
  if (data["userN"] === undefined && data["password"] === undefined) {
    res.send("Plz... enter details");
  } else {
    knex("log")
      .insert({
        userN: req.body.userN,
        password: bcrypt.hashSync(req.body.password, 10),
      })
      .then((result) => {
        res.send("Your account is created...");
      })
      .catch((err) => {
        res.send(err, "sd");
        console.log(err, "ksad");
      });
  }
};

login = (req, res) => {
  const data = {
    userN: req.body.userN,
    password: req.body.password,
  };
  if (data["userN"] === undefined && data[password] === undefined) {
    res.send("Plz enter userName or Password");
  } else {
    knex("log")
      .where({ userN: data["userN"] })
      .then((data) => {
        const password = bcrypt.compareSync(
          req.body.password,
          data[0].password
        );
        if (password) {
          const token = generateToken(data);
          res.cookie("token", token).send(data);
        } else {
          res.send("something went wrong");
        }
      })
      .catch((err) => {});
  }
};

logout = (req, res) => {
  res.clearCookie("token").send("Logout");
};

module.exports = { createAccount, login, logout };
