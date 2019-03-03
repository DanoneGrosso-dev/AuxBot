//Import da pasta SRC
const Client = require("./src/Client");
const client = new Client({ config: "./config" });
client.login(client.config.token);
client.loadcomandos(client.config.paths.comandos);
client.loadEvents(client.config.paths.eventos);