const { SlashCommandBuilder } = require('discord.js');
const { Client } = require('pg');
const { host, user, port, password, database } = require('../../config.json');

async function getCount() {
    const client = new Client({
        host: host,
        user: user,
        port: port,
        password: password,
        database: database
    });

    await client.connect();

    try { // get number of rows in database
        const res = await client.query(
            `select count(*) from discordmsg;`
        );
        if (res.rows.length > 0) {
            const Count = res.rows[0].count;
            return Count;
        } else {
            return null;
        }
    } catch (err) {
        console.error('Query error', err.stack);
    } finally {
        await client.end();
    }

}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Describes the purpose of the bot'),
    async execute(interaction) {
        await interaction.reply(`The purpose of this bot is to display a randomly selected message from a database of ` + await getCount() + ` past Discord messages.`);
    },
};