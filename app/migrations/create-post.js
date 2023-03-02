'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Post', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            title: {
                type: Sequelize.STRING
            },
            like: {
                type: Sequelize.BOOLEAN
            },
            description: {
                type: Sequelize.STRING
            },

            usertId: {
                type: Sequelize.DataTypes.STRING,
                references: {
                    model: 'users',
                    key: 'id',
                },
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Post')
    }
};