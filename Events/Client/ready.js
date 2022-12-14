// [-------------------[Imports]-------------------]
const { loadCommands } = require("../../src/Handlers/commandHandler");
const chalk = require("chalk");
const { ActivityType } = require("discord.js");
// [-------------------[File Initiation]-------------------]
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    const { user, guilds } = client;
    const guild = guilds.cache.get(`1050402538429624382`);
    // [-------------------[Status & Presence Initiation]-------------------]
    user.setPresence({
      activities: [
        {
          name: `${guild.memberCount} Baseds`,
          type: ActivityType.Watching,
        },
      ],
      status: "dnd",
    });

    // [-------------------[Bot Startup Message]-------------------]
    loadCommands(client)
      .then(
        console.log(
          chalk.gray("Command Initiation:"),
          chalk.green("Successful")
        )
      )
      .catch((err) =>
        console.error(
          chalk.gray("Command Initiation:"),
          chalk.red("Failed"),
          chalk.gray(`\n${err}`)
        )
      );
    console.log(chalk.gray("Connected To"), chalk.yellow(`${user.tag}`));
  },
};
