const express = require("express");

const addUser = require('../controller/user-controller.js')

const router = express.Router();

router.post("/adduser", addUser);

module.exports =  router;
