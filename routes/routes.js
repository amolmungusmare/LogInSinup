const { createAccount, login, logout } = require("./../insert/insert");
const express = require("express");
const routes = express.Router();

routes.post("/sigup", createAccount);
routes.get("/login", login);
routes.post("/logout", logout);

module.exports = routes;
