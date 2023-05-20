// @ts-check

const { SlashCommandBuilder } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with Pong!');

// @ts-ignore
module.exports.execute = async (interaction) => {
  await interaction.reply('Pong!');
};
