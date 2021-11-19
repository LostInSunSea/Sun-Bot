require('dotenv').config(); 
import Discord from "discord.js";
import { checkFortnite } from "./commands/checkFortnite";
import { exodia } from "./commands/exodia";

const commands = [
    exodia,
];

const bot = new Discord.Client({
    intents: ["GUILDS","GUILD_MESSAGES","GUILD_PRESENCES"]
});

//runs commands when bot starts
bot.on("ready", ()=>{
    console.log("bot started");
})

//check presence
bot.on("presenceUpdate",(oldPresence, newPresence)=>{
    //function to track games people are playing from start
    if(oldPresence !== null){
        if(oldPresence.userId == process.env.USER1){
            console.log("OLD")
            checkFortnite(bot, process.env.USER1, oldPresence);
        }
    }
})

bot.login(process.env.CLIENT_TOKEN);

//debug things
process.on("uncaughtExceptionMonitor", (err: Error, origin: unknown) => {
    console.error("Error while running", err, origin);
  });
  
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
});