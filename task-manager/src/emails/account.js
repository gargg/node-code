const sgmail = require('@sendgrid/mail')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

// sgmail.send({
//     to: 'garima.agarwal@gmail.com',
//     from: 'garima.agarwal@gmail.com',
//     subject: 'First test mail',
//     text: 'hope this works'
// })

const sendWelcomeEmail = (email, name) => {
    sgmail.send({
        to: email,
        from: 'garima.agarwal@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Enjoy`
    })
}

const sendCancelEmail = (email, name) => {
    sgmail.send({
        to: email,
        from: 'garima.agarwal@gmail.com',
        subject: 'Cancellation confirmation',
        text: `Sorry to see you go ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}