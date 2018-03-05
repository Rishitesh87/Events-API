'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      { title: 'J&J wedding', startDate: "2018-03-15", endDate:"2018-03-16" ,description:'the wedding will take place at the Royal hall of Cumberton' ,createdAt: 'NOW()', updatedAt: 'NOW()' }
      
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
