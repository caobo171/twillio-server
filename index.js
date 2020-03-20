// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

const authObject = require('./env.json');
const accountSid = 'ACc5393f15d8f9ae3de188c9de66dc405a';
const authToken = authObject.auth;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12057725908',
     to: '+84961221490'
   })
  .then(message => console.log(message.sid));