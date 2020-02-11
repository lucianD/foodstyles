const {GraphQLServer} = require('graphql-yoga');
const bodyParser = require('body-parser');
const dbService = require('./services/db');
const resolvers = require('./resolvers');
const models = require('./models');
const db = dbService('development', true).start();
const server = new GraphQLServer({
    typeDefs: './config/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        db: db,
    }),
});

models.sequelize.sync().then(function () {
    // server.listen(4001);
    // server.on('error', (e) => console.log(e));
    // server.on('listening', (e) => console.log(e));
});

server.express.use(bodyParser.json());

server.start({
    playground: '/',
    subscriptions: '/',
}, () => {
    // server is running
    console.log('Server is running on http://localhost:4000')
    return db;
});

