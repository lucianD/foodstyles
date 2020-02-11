const {GraphQLServer} = require('graphql-yoga');
const bodyParser = require('body-parser');
// const db = require('./database/connection');
const resolvers = require('./resolvers');
console.log(resolvers);
const index = new GraphQLServer({
    typeDefs: './config/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        // db: db,
    }),
});

index.express.use(bodyParser.json());

index.start({
    playground: '/',
    subscriptions: '/',
}, () => {
    // server is running
    console.log('Server is running on http://localhost:4000')
});

