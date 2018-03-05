var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:mysecret@localhost:5432/postgres')
const port = process.env.PORT || 4001

module.exports = sequelize
