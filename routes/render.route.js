let express = require("express");
let renderController = require("../controllers/render.controller");
let route = express.Router();

route.get("/index", renderController.renderIndex);

module.exports = route;
