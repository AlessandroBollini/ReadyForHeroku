const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('deom1eaebca2ao', 'btdwzylnjfbpei', 'ad8ef5f7085442f729d7e8809c6f29586b1ac9bc631b95600941ff3aaeccecdc', {
    host: 'ec2-52-212-228-71.eu-west-1.compute.amazonaws.com',
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