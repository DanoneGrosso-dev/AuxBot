const src = require("../src/cmd");

 class Ping extends src {
  constructor(client) {
    super(client, {
      name: "ola",
      description: "Diz se o bot ta vivo",
      usage: "", 
      category: "Nenhuma",
      cooldown: 1000,
      aliases: ["vivo?"],
      permLevel: 0,
      permission: "READ_MESSAGES"
    });
  }
  run(message) {
    super.respond(`To vivão`);
  }
}

module.exports = Ping;