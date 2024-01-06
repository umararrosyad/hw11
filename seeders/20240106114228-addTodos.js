'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Todos', [
      {
        title: 'mengerjakan homework',
        description: "homework week 11 todo list",
        status : "inactive",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: 'mengerjakan examp',
        description: "examp week 11 unit testing",
        status : "active",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: 'mengikuti live mentoring',
        description: "live mentoring bsreng bang vincent",
        status : "active",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: 'mengikuti live session',
        description: "live session minggu pagi",
        status : "active",
        createdAt : new Date(),
        updatedAt : new Date()
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Todos', null, {});
  }
};
