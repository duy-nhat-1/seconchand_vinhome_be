const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('vinhome', 'root', '123456', {
    host: 'localhost',
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