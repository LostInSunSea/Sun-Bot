import * as discord from "discord.js";

export function checkFortnite(bot: discord.Client, player:string ,psc: discord.Presence) {
    psc.activities.forEach((activity)=>{
        //check if time stamp for oldpresence is null
        let start = activity.timestamps!.start;
        let end = activity.timestamps!.end;
        if(end === null){
            end = new Date();
        }
        //get length played in seconds
        let difference = (+end - +start)/1000;
        //check if game is fortnite
        if(activity.name === 'Fortnite'){
            console.log("You are playing fortnite");
            const user = bot.users.cache.get(player);
            user?.send("You Are Playing Fortnite");
        }
    })
}