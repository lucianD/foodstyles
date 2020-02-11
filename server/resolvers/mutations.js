const bcrypt = require('bcryptjs')

const mutations = {
    async signUp(parent, args, ctx, info) {
        const password = await bcrypt.hash(args.password, 10);

        return true;
    },
};

module.exports = mutations;
