import * as discord from "discord.js";

export function checkFortnite(bot: discord.Client, player:string ,psc: discord.Presence) {
    psc.activities.forEach((activity)=>{
        console.log(activity)
        if(activity.name === 'Fortnite'){
            console.log("You are playing fortnite");
            const user = bot.users.cache.get(player);
            user?.send("You Are Playing Fortnite");
        }
    })
}