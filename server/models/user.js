const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt');

const sequelize = require('../database/db');

const hooks = {
    beforeCreate(user) {
        user.password = bcryptService().password(user);
    },
};

const tableName = 'users';

const User = sequelize.define('User', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
    },
    authToken: {
        type: Sequelize.STRING,
    },
    refreshToken: {
        type: Sequelize.STRING,
    },
}, {hooks, tableName});

// eslint-disable-next-line
User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());

    delete values.password;

    return values;
};

module.exports = User;
