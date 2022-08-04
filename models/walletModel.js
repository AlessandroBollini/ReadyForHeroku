const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('da8492uranh4q2', 'fyreswaoebehjd', '8075ca1a83790a047f673e374117fc915f19ced4c418974cb1e35d2742b77b01', {
    host: 'ec2-34-248-169-69.eu-west-1.compute.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true, 
          rejectUnauthorized: false
        }
      },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Wallet extends Model { }
Wallet.init({
    address: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    publicKey: {
        type: DataTypes.STRING,
        unique: true
    },
    privateKey: DataTypes.STRING,
    seedPhrase: DataTypes.STRING,
    received: DataTypes.BOOLEAN,
    used:DataTypes.BOOLEAN
}, {
    timestamps: false,
    sequelize
});

(async () => {
    await sequelize.sync({ alter: true });
})();

module.exports.Wallet = Wallet;