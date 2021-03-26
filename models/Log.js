const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Log = sequelize.define('log', {
    'id' : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'endpoint': {
        type: Sequelize.STRING
    },
    'acccess_at' : {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Log;