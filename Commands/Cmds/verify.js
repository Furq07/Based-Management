const {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} = require("discord.js");
module.exports = {
  name: "verify-msg",
  description: "sends an verify msg",
  dev: true,
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor("Yellow")
      .setTitle("Welcome to Based Community!")
      .setThumbnail(
        `https://media.discordapp.net/attachments/1043580523571843082/1047927461507252324/gisdgsfgdghy.gif`
      )
      .setDescription(
        `**First of all, Read the Rules and be Based!**

        **__Be Based:__**
        1. Accept everything just the way it is.
        2. Do not seek pleasure for its own sake.
        3. Do not, under any circumstances, depend on a partial feeling.
        4. Think lightly of yourself and deeply of the world.
        5. Be detached from desire your whole life long.
        6. Do not regret what you have done.
        7. Never be jealous.
        8. Never let yourself be saddened by a separation.
        9. Resentment and complaint are appropriate neither for oneself or others.
        10. Do not let yourself be guided by the feeling of lust or love.
        11. In all things have no preferences.
        12. Be indifferent to where you live.
        13. Do not pursue the taste of good food.
        14. Do not hold on to possessions you no longer need.
        15. Do not act following customary beliefs.
        16. Do not collect weapons or practice with weapons beyond what is useful.
        17. Do not fear death.
        18. Do not seek to possess either goods or fiefs for your old age.
        19. You may abandon your own body but you must preserve your honor.
        20. Never stray from the way.

        **__Must Complete This Step:__**
        `
      );

    const Buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("verify")
        .setLabel("Click to Verify")
        .setEmoji("✅")
        .setStyle(ButtonStyle.Danger)
    );
    interaction.reply({ content: "Done", ephemeral: true });
    interaction.channel.send({
      embeds: [
        embed,
        new EmbedBuilder()
          .setColor("Yellow")
          .setDescription(`Put the Picture Down Below as your Profile Picture!`)
          .setImage(
            `https://media.discordapp.net/attachments/717871987300761650/1052264172194373714/feffaca71558dabc094a5fca4e8242b3.png`
          ),
        new EmbedBuilder()
          .setColor("Yellow")
          .setDescription(`If you have Nitro, use the Gif Version down Below!`)
          .setImage(
            `https://media.discordapp.net/attachments/1043580523571843082/1047927461507252324/gisdgsfgdghy.gif`
          )
          .setFooter({
            text: `when you completed this step, Click on the verify button Down Below!`,
            iconURL: `https://media.discordapp.net/attachments/1043580523571843082/1047927461507252324/gisdgsfgdghy.gif`,
          }),
      ],
      components: [Buttons],
    });
  },
};
