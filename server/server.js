const express = require('express');
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3001; 
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// This is a wildcard route that if any route is sent to the server that is not a DB / server recognized route, it will server assets from the react front end
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });


app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}! (^^)b`)
})