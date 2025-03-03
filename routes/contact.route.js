let express = require("express");
let route = express.Router();
let contactController = require("../controllers/contact.controller");
route.post("/", contactController.writeUsers);
module.exports = route;
