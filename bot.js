(async()=>{
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
                    console.log(err);
                  });
                  let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
let dootabase = new Database("./database.json")
const os = require("os-utils");
const lyricsFinder = require('lyrics-finder');
const write = require('write');
                    require('events').EventEmitter.defaultMaxListeners = 50;
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`./database.json`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    logs(s4d.client);         
                    var cmd;


const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('This site was created to keep bot on 25/8');
});
server.listen(3000);

await s4d.client.login((process.env.TOKEN)).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid token was provided!")
        } else {
            throw new Error("Intents are not turned on!")
        }
    });

s4d.client.on('messageCreate', async (s4dmessage) => {
  cmd = (s4dmessage.content).toLowerCase();
  if (String(cmd).includes(String('nigga'))) {
    s4dmessage.delete();
    (s4dmessage.member).ban({ reason: 'slur' });
  }
  if (String(cmd).includes(String('nigger'))) {
    s4dmessage.delete();
    (s4dmessage.member).ban({ reason: 'slur' });
  }
  if (String(cmd).includes(String('fag'))) {
    s4dmessage.delete();
    (s4dmessage.member).ban({ reason: 'slur' });
  }
  if (String(cmd).includes(String('fagot'))) {
    s4dmessage.delete();
    (s4dmessage.member).ban({ reason: 'slur' });
  }
  if (String(cmd).includes(String('faget'))) {
    s4dmessage.delete();
    (s4dmessage.member).ban({ reason: 'slur' });
  }
  if (String(cmd).includes(String('fagget'))) {
    s4dmessage.delete();
    (s4dmessage.member).ban({ reason: 'slur' });
  }
  if (String(cmd).includes(String('faggot'))) {
    s4dmessage.delete();
    (s4dmessage.member).ban({ reason: 'slur' });
  }
  if (String(cmd).includes(String('retard'))) {
    s4dmessage.delete();
    (s4dmessage.member).ban({ reason: 'slur' });
  }
  if (String(cmd).includes(String('tranny'))) {
    s4dmessage.delete();
    (s4dmessage.member).ban({ reason: 'slur' });
  }

});

                    return s4d
                    })(); 