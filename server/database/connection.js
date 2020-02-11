const development = {
    database: 'foodstyles',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'sqlite' || 'mysql' || 'postgres',
};

const testing = {
    database: 'databasename',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'sqlite' || 'mysql' || 'postgres',
};

const production = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'sqlite' || 'mysql' || 'postgres',
};

module.exports = {
    development,
    testing,
    production,
};
