const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const userModel = {
  file: join(__dirname, "../data", "usersDataBase.json"),
  index: () => JSON.parse(readFileSync(model.file)),
  findOne: (id) => model.index().find((p) => p.id == id),
  filterCategory: (category) => model.index().filter((p) => p.category == category),
  save: (users) => writeFileSync(join(__dirname, "../data", "usersDataBase.json"), JSON.stringify(users, null, 2))
};

module.exports = userModel;