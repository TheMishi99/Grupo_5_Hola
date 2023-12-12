const { readFileSync, writeFileSync } = require("fs");

const { join } = require("path");

const model = {
  file: join(__dirname, "../data", "productsDataBase.json"),
  index: () => JSON.parse(readFileSync(model.file)),
  findOne: (id) => model.index().find((p) => p.id == id),
  filterCategory: (category) => model.index().filter((p) => p.category == category),
  save: (products) => writeFileSync(join(__dirname, "../data", "productsDataBase.json"), JSON.stringify(products))
};

module.exports = model;
