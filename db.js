var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:mysecret@localhost:5432/postgres')

module.exports = sequelize
