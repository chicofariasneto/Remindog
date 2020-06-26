const {
    Pool
} = require('pg')


// Localhost
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
})

/*
// heroku
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
*/

module.exports = {
    pool,
}