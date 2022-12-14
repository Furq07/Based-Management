const {
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} = require("discord.js");
module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    const { customId, guild, member } = interaction;
    if (!interaction.isButton()) return;
    if (customId === "verify") {
      const beingVerified = guild.roles.cache.find(
        (r) => r.id == "1052192966053203998"
      );
      const checkup = guild.channels.cache.find(
        (c) => c.id == "1052168077980209202"
      );

      const MemberPFP = member.user.displayAvatarURL();
      const Buttons = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("accept")
          .setLabel("He Shall be Based Now!")
          .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
          .setCustomId("deny")
          .setLabel("He is Still Retard...")
          .setStyle(ButtonStyle.Danger)
      );
      checkup.send({
        embeds: [
          new EmbedBuilder()
            .setAuthor({ name: guild.name, iconURL: guild.iconURL() })
            .setTitle("New Member Checkup!")
            .setColor("DarkGrey")
            .setDescription(
              `A new User just wanna become Based,
              Please Check if he can be Based or not!

              Here is the user's Profile: <@${member.id}>
              Here is his PFP:`
            )
            .setImage(MemberPFP)
            .setFooter({
              text: member.id,
              iconURL: guild.iconURL(),
            }),
        ],
        components: [Buttons],
      });
      interaction.reply({
        content: "Please wait, Staff Team is Checking You up!",
        ephemeral: true,
      });
      member.roles.add(beingVerified);
    }
  },
};
