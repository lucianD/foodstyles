const queries = {

    async me(parent, args, ctx, info) {
        const {user} = ctx.request;
        return true;
    },
};

module.exports = queries;
