const mariadb = require('mariadb');
const POOL = mariadb.createPool({
    host: '176.96.231.158',
    user: 'j01',
    password: 'user456',
    database: 'florist'
});


POOL.getConnection()
    .then(conn => {
        console.log("Connected to DB successfully!");
        conn.release();
    })
    .catch(err => {
        console.log(err.message);
    });


module.exports = POOL;