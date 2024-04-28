const { Sequelize, DataTypes } = require('sequelize');

// Define database connection parameters
const sequelize = new Sequelize('my_hotel_booking_db', 'Susmita', 'Susmita@1967', {
  host: 'localhost',
  dialect: 'postgres',
  pot:'5432'
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { sequelize, DataTypes, testConnection };
