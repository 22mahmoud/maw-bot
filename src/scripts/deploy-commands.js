// @ts-check
require('dotenv').config();

const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('../config/constants');
const fs = require('node:fs');
const path = require('node:path');

/** @type {Record<string, unknown>[]}  */
const commands = [];
const foldersPath = path.join(__dirname, '..', 'commands');
const commandFiles = fs
  .readdirSync(foldersPath)
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(foldersPath, file);
  const command = require(filePath);

  if (!('data' in command) || !('execute' in command)) {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
    );

    continue;
  }

  commands.push(command.data.toJSON());
}

const rest = new REST().setToken(token);

/**
 *
 */
async function main() {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`,
    );

    const data = /** @type {any[]} */ (
      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: commands,
      })
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`,
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
}

main();
