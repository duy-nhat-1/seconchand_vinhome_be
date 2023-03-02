'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Product', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.BOOLEAN
            },
            postId: {
                type: Sequelize.DataTypes.STRING,
                references: {
                    model: 'post',
                    key: 'id',
                },
                allowNull: false
            },
            categoryId: {
                type: Sequelize.DataTypes.STRING,
                references: {
                    model: 'category',
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
        await queryInterface.dropTable('Product')
    }
};