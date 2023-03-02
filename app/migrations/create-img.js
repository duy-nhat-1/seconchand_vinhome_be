'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Img', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      postId: {
        type: Sequelize.DataTypes.STRING,
        references: {
          model: 'post',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Img')
  }
};
