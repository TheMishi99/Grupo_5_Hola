const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const userModel = {
  file: join(__dirname, "../data", "usersDataBase.json"),
  index: () => JSON.parse(readFileSync(userModel.file)),
  findOne: (id) => userModel.index().find((p) => p.id == id),
  save: (users) => writeFileSync(join(__dirname, "../data", "usersDataBase.json"), JSON.stringify(users, null, 2)),
  findByPk: function (id){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser.id === id);
    return userFound;
  },
  getData: function () {
    return JSON.parse(readFileSync(this.file, "utf-8")); 
  },
  findAll: function () {
    return this.getData();
  },
  findByField: function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
  },
  generateId: function(){
    allUsers = userModel.findAll();
    lastUser = allUsers.pop();
    if(lastUser){
      return lastUser.id + 1
    }
    return 1;
  },
};

module.exports = userModel;