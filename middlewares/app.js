let express = require("express");
let renderPage = require("../routes/render.route");
let app = express();
let cors = require("cors");
app.use(express.json());
app.set("views", "./public/johndoe");
app.set("view engine", "ejs");
app.use(cors("*"));
app.use(express.static("./public/johndoe"));
app.use("/", renderPage);

app.use("*", (req, res) => {
  res.status(200).json({ message: "Success" });
});
module.exports = app;
