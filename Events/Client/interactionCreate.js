module.exports = {
  name: "interactionCreate",
  execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      // < ===========[Initiate InteractionCreate]=========== >
      const command = client.commands.get(interaction.commandName);
      if (!command)
        return interaction.reply({
          content: "This command is outdated!",
          ephemeral: true,
        });
      // < ===========[Developer Only System]=========== >
      if (
        command.dev &&
        !["579382548258357419", "427311979347181580"].includes(
          interaction.member.id
        )
      )
        return interaction.reply({
          content: "This is an Developer Only Command!",
        });
      // < ===========[Sub Command Handling]=========== >
      const subCommand = interaction.options.getSubcommand(false);
      if (subCommand) {
        const subCommandFile = client.subCommands.get(
          `${interaction.commandName}.${subCommand}`
        );
        if (!subCommandFile)
          return interaction.reply({
            content: "This sub-command is outdated!",
            ephemeral: true,
          });
        subCommandFile.execute(interaction, client);
      } else command.execute(interaction, client);
    }
  },
};
