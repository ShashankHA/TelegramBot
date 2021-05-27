

 exports.sendMessage = function sendMessage(message) {
    const TelegramBot = require('node-telegram-bot-api');

   
    const token = '<token for my boat  - shashankBot>';  
    // this is the token for my boat  - shashankBot

    const bot = new TelegramBot(token);

    bot.sendMessage("1476746709", message);  // 1476746709 is the hardcoded chat id. 

    console.log("message sent to telegram");

}

