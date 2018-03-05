'use strict';
module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define('Events', {
    title: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    description: DataTypes.TEXT
  }, {});
  Events.associate = function(models) {
    // associations can be defined here
  };
  return Events;
};
