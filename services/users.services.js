let fs = require("fs");
const path = require("path");
let readUsers = () => {
  let users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../config/users.json"), "utf-8")
  );
  return users;
};
let addUsers = (data) => {
  fs.writeFileSync(
    path.join(__dirname, "../config/users.json"),
    JSON.stringify(data),
    "utf8"
  );
  return data;
};
module.exports = { addUsers, readUsers };
