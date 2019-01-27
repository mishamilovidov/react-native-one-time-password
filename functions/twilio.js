const twilio = require('twilio');

const accountSid = 'AC99289bb936bb02e55b6c74c3a0d9d4f0';
const authToken = 'cb2011b1f52022880c6fae7cb34d7b78';

module.exports = new twilio.Twilio(accountSid, authToken);
