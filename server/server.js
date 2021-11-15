const express = require('express');
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3001; 
const app = express();

app.use(express.urlencoded({ extneded: false }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}! (^^)b`)
})