const { Client, Collection } = require("discord.js");
const { readdir } = require("fs");


class CustomClient extends Client {
    constructor(options) {
        super(options.ClientOptions || {});
        this.comandos = new Collection();
        this.aliases = new Collection();
        this.config = options.config ? require(`../${options.config}`) : {};
        this.perms = options.perms ? require(`../${options.perms}`) : {};

        console.log(`AuxBot inciado usando o node na versão : ${process.version}.\nOwners : Gabriel Hijazi & Pablo Vinicíus`);

    }

    login(token) {
        super.login(token);
        return this;
    }
    /**
   * Handler para carregar todos os comandos do diretório
   * @param {String} path path é onde os comandos estão alocados
   */

    loadcomandos(path) {
        readdir(path, (err, files) => {
            if (err) console.log(err);

            files.forEach(cmd => {
                const command = new (require(`../${path}/${cmd}`))(this);

                this.comandos.set(command.help.name, command);

                command.conf.aliases.forEach(a => this.aliases.set(a, command.help.name));
            });
        });

        return this;
    }

    /**
     * Handler dos Eventos
     * @param {String} path Onde os eventos estão alocados
     */

    loadEvents(path) {
        readdir(path, (err, files) => {
            if (err) console.log(err);

            files.forEach(evt => {
                const event = new (require(`../${path}/${evt}`))(this);

                super.on(evt.split(".")[0], (...args) => event.run(...args));
            });
        });

        return this;
    }
}

module.exports = CustomClient;

