const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("group-chat-app", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;