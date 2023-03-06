const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('heroku_350018a8682af83', 'b185d615b9cc84', 'd90e3ccb', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql'
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
export default connectDB