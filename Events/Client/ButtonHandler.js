const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    const { customId, channel, message, guild } = interaction;
    if (!interaction.isButton()) return;
    if (["accept", "deny"].includes(customId)) {
      const beingVerified = guild.roles.cache.find(
        (r) => r.id == "1052192966053203998"
      );
      const msg = await channel.messages.fetch(message.id);
      const embed = msg.embeds[0];
      const footer = embed.footer.text;
      const member = guild.members.cache.get(footer);
      const verified = guild.roles.cache.find(
        (r) => r.id == "1050426123139420261"
      );
      msg.edit({ components: [] });
      switch (customId) {
        case "accept":
          member.send({
            embeds: [
              new EmbedBuilder()
                .setTitle("You are now Based!")
                .setColor("Yellow")
                .setDescription(
                  `You have been Officially Approved as Based,
                Welcome to the Community Brudar!
                
                [Click me to be Directed to the General!](https://discord.gg/7gNuTmXTJK)`
                ),
            ],
          });
          member.roles.add(verified);
          member.roles.remove(beingVerified);
          break;
        case "deny":
          member.send({
            embeds: [
              new EmbedBuilder()
                .setTitle("You are Retard!")
                .setColor("Yellow")
                .setDescription(
                  `You have been Officially Approved as Retard,
                  You have been kicked from the Server!
                  
                  If you ever feel like becoming Based, [Click Me](https://discord.gg/7gNuTmXTJK)!
                  `
                ),
            ],
          });
          try {
            member.kick("He is Retard!");
          } catch {}
          break;
      }
    }
  },
};
