// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC31802eb19c418e6df06c7a80ea85e540';
const authToken = '4c066c996d3fa741bd48807c1545a97b';
const client = require('twilio')(accountSid, authToken);

function sendMessage() {
  console.log("Sending message...");
  client.messages
    .create({
       body: 'Test',
       from: '+16172022233',
       to: '+16175436108'
     })
    .then(message => console.log(message.sid));
}

for (var i = 0; i < 2; i++) {
  sendMessage();
}
