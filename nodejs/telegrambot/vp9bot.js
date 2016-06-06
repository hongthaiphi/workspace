'use strict'

var tg = require('telegram-node-bot')('196991041:AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U')

tg.router.
    when(['ping'], 'PingController')

tg.controller('PingController', ($) => {
    console.log('chatId:' + $.chatId);
    tg.for('ping', () => {
        // $.sendMessage('pong');
        $.sendMessage('ChatId: ' + $.chatId);
    })
})
//group -146596830
//thai 234052264
//cam9 group: -128035466
