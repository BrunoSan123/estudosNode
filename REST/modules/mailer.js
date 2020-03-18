const nodemailer  = require('nodemailer');
const {host,post,user,pas} = require('../src/config/mail.json')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

var transport = nodemailer.createTransport({
    host,
    port,
    auth: {user,pass },
  });

  transport.use('compile',hbs({

   viewEngine:'handlebars',
   viewPath: path.resolve('./resources/mail/'),
   extname: '.html',
   

  }))

  module.exports =transport;