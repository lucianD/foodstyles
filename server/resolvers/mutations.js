const bcrypt = require('bcryptjs')
const UserModel = require('../models/user')

const mutations = {
    async signUp(parent, args, ctx, info) {
        // const password = await bcrypt.hash(args.user.password, 10);
        return await UserModel.create({
            email: 'lucian.doghi@gmail.com',
            name: 'Lucian Doghi',
            password: 'test',
        });
    },

    async login(parent, args, ctx, info) {
        return true;
    },

    async refreshAuthToken(parent, args, ctx, info) {
        return true;
    },
};

module.exports = mutations;
