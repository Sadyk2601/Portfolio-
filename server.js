let env = require("dotenv").config();
let app = require("./middlewares/app");
app.listen(process.env.PORT);
