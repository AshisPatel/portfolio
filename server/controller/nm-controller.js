const nodemailer = require('nodemailer');
const { google } = require('googleapis');



module.exports = {
    async sendMail(req, res) {
        try {
            const CLIENT_ID = '323288272715-aplomjt1m3n72s2bldgk80d4ddt6qhg1.apps.googleusercontent.com';
            const CLIENT_SECRET = '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';
            const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
            const REFRESH_TOKEN = '1//04UmjRR6HvKY1CgYIARAAGAQSNwF-L9IrwevpWJf5USAgB65gS-aKeaeliHReFUJV6BrEpTXVcGy13ypGBB2ZuJ75TQwachOr_gg';

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

            const mailOptions = {
                from: 'Portfolio Email <apresumebot@gmail.com',
                to: 'ashis.n.patel@gmail.com',
                subject: 'Hello from the GMAIL test api!',
                text: "Hello friend! It works. :)",
                html: "<h1>Hello friend! It works. :)</h1>"
            }
            
            const result = await transport.sendMail(mailOptions);
            return res.json({ result: result});

        } catch (error) {
            return error;
        }
    }
}