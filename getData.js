const { Client } = require('pg');
const { host, user, port, password, database } = require('./config.json');

async function getData(username) {
    const client = new Client({
        host: host,
        user: user,
        port: port,
        password: password,
        database: database
    });

    await client.connect();

    try {
        const res = await client.query(
            `select content from discordmsg 
        where username='`+ username + `'
        order by random() 
        limit 1;`
        );

        if (res.rows.length > 0) {

            const stringValue = res.rows[0].content;
            return stringValue;
        } else {
            return null;
        }
    } catch (err) {
        console.error('Query error', err.stack);
    } finally {
        await client.end();
    }
}

module.exports = getData;

