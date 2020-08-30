const twilio = require('twilio')

//Both should be environment vars 
const ACCOUNT_SID = '<account_id>'
const AUTH_TOKEN = '<auth_token>'
const NUMBER_FROM = 'whatsapp:+14155238886'
const NUMBER_TO = 'whatsapp:+57300300300' 

const client = twilio(ACCOUNT_SID, AUTH_TOKEN)

const init = async()=>{
    const response = await client.messages.create({
        body:'Hi there! this is my first message sent from twilio!',
        from: NUMBER_FROM,
        to: NUMBER_TO
    })
    console.log(response)
}

init()

