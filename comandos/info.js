const Command = require("../src/cmd");
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

class binfo extends Command {
  constructor (client) {
    super(client, {
      name: "botinfo",
      description: "Algumas informações sobre o AuxBot",
      usage: "botinfo",
    });
  }

  async run (message, args) { 
    const duration = moment.duration(this.Aux.uptime).format(" D [Dias], H [Horas], m [mins], s [segs]");
    message.channel.send(`  [========AuxBot========]
  Memória Ram ==> ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
  Uptime      ==> ${duration}
  Usuários    ==> ${this.Aux.users.size.toLocaleString()}
  Servidores  ==> ${this.Aux.guilds.size.toLocaleString()}
  Canais      ==> ${this.Aux.channels.size.toLocaleString()}
  Discord.js  ==> v${version}
  Node        ==> ${process.version}`, {code: "asciidoc"});
  }
}

module.exports = binfo;