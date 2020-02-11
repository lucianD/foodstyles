const UserModel = require('../models/user')

const queries = {

    async me(parent, args, ctx, info) {
        const {user} = ctx.request;
        return true;
    },

    async users(parent, args, ctx, info) {
        return UserModel.findAll();
    },
};

module.exports = queries;
