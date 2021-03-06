const Sequelize = require('sequelize')
const sequelize = require('../db')
// const sequelize = require('../models').sequelize

const Event = sequelize.define('event', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
},
  tableName: 'Events',
  timestamps: false
})

module.exports = Event
