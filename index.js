const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const chalk = require("chalk");
const { Guilds } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const { loadEvents } = require("./Handlers/eventHandler");
const client = new Client({
  intents: [Guilds],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();

loadEvents(client)
  .then(() =>
    console.log(chalk.gray("Events Initiation:"), chalk.green("Successful"))
  )
  .catch((err) =>
    console.log(
      chalk.gray("Events Initiation:"),
      chalk.red("Failed"),
      chalk.gray(`\n${err}`)
    )
  );

// ———————————————[Login Into Bot]———————————————
client.login(env.process.TOKEN);

// ———————————————[Error Handling]———————————————
process.on("unhandledRejection", (reason, p) => {
  console.log(chalk.gray("—————————————————————————————————"));
  console.log(
    chalk.white("["),
    chalk.red.bold("AntiCrash"),
    chalk.white("]"),
    chalk.gray(" : "),
    chalk.white.bold("Unhandled Rejection/Catch")
  );
  console.log(chalk.gray("—————————————————————————————————"));
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(chalk.gray("—————————————————————————————————"));
  console.log(
    chalk.white("["),
    chalk.red.bold("AntiCrash"),
    chalk.white("]"),
    chalk.gray(" : "),
    chalk.white.bold("Uncaught Exception/Catch")
  );
  console.log(chalk.gray("—————————————————————————————————"));
  console.log(err, origin);
});
