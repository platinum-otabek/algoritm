var express = require('express');
var router = express.Router();

const Telegram = require('node-telegram-bot-api');
const Token = '1275921498:AAH_rfuNrbyc6kGuzBjMJbgGnCzMwD9XtI8';
const bot = new Telegram(Token,{
  polling:true,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/contact',  (req, res, next) => {
    bot.sendMessage(847899158, `<b> ${req.body.name}:</b>  ${req.body.number}  ${req.body.message}:`,{
        parse_mode:'HTML'
    });
    bot.sendMessage(685474039, `<b> ${req.body.name}:</b>  ${req.body.number}  ${req.body.message}:`,{
        parse_mode:'HTML'
    });
    res.redirect('/');
})

module.exports = router;
