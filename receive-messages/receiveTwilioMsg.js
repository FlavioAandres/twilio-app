


const parseBody = (body)=>{
    let params = body.split("&")
    let object = params.reduce((prev, current) => {
        let result = current.split("=")
        prev[result[0]] = decodeURIComponent(result[1] || '')
        return prev
    }, {})
    
    return object
}

const twilio = require('twilio')
const MessagingResponse = twilio.twiml.MessagingResponse;

module.exports.start = async (event, context, callback)=>{
    const twilioEvent = parseBody(event.body)
    const BodyMessage = twilioEvent.Body
    const response = `Your message was: ${BodyMessage}\n This is a response from NodeJS`
    
    const TwilioResponse = new MessagingResponse()
    TwilioResponse.message(response)
    
    return context.done(null, {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/xml',
        },
        body: TwilioResponse.toString()
    })
}
