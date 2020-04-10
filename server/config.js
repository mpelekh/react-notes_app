const {
    PORT = 3000,
    
    // mongo
    DB_HOST = '127.0.0.1',
    DB_PORT = 27017,
    DB_USER,
    DB_PASSWORD,
    DB_NAME = 'notes',
} = process.env;

export default {
    listenPort: PORT,
    mongo: {
        dbHost: DB_HOST,
        dbName: DB_NAME,
        dbPort: DB_PORT,
        dbUser: DB_USER,
        dbPassword: DB_PASSWORD,
    },
};
