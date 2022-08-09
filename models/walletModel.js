/**const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('d2udoeqr5p34ka', 'lxbbmbefejngpl', 'bf3a21d2eb23330cb20836845e984e73da33c00db7b4afba6db21ff3ebc74354', {
    host: 'ec2-54-155-110-181.eu-west-1.compute.amazonaws.com',
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
*/
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('NFTWallets', 'bollini', 'password', {
    host: 'localhost',
    dialect: 'postgres'
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
    used:DataTypes.BOOLEAN,
    image:DataTypes.STRING
}, {
    timestamps: false,
    sequelize
});

(async () => {
    await sequelize.sync({ alter: true });
})();

module.exports.Wallet = Wallet;