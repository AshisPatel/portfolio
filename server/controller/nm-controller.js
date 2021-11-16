const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require("dotenv").config();


module.exports = {
    async sendMail({ body }, res) {
        try {
            const CLIENT_ID = process.env.CLIENT_ID;
            const CLIENT_SECRET = process.env.CLIENT_SECRET;
            const REDIRECT_URI = process.env.REDIRECT_URI;
            const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

            const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
            oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
            const accessToken = await oAuth2Client.getAccessToken();
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'apresumebot@gmail.com',
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            });

            const mailBody = 
            `
            <h1>${body.name}</h1>
            <p>${body.message}</p>
            <p>Contact: ${body.allowed}</p>
            <p>Phone Number: ${body.phone}</p>
            <p>Email: ${body.email}</p>
            `

            const mailOptions = {
                from: 'Portfolio Email <apresumebot@gmail.com',
                to: 'ashis.n.patel@gmail.com',
                subject: 'Portfolio Inquiry',
                text: "Hello friend! It works. :)",
                html: mailBody
            }
            
            const result = await transport.sendMail(mailOptions);
            return res.json({ result: result});

        } catch (error) {
            return error;
        }
    }
}