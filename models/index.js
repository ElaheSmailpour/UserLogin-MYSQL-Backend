
const Sequelize = require("sequelize")
const db = {};
const mysequelize= new Sequelize("chat","root","",{
    host:"localhost",
    dialect:"mysql"

})
db.Sequelize = Sequelize;
db.sequelize = mysequelize;

db.users = require("./user")(mysequelize, Sequelize);

module.exports = db;