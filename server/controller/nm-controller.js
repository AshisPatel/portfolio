module.exports = {
    sendMail(req, res) {
        console.log('Hello!');
        return res.json({ message: "Hello world!" })
    }
}