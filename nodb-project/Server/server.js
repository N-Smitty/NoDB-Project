const express = require('express');
const app = express();
const mainCtrl = require('./controller/mainController')
const SERVER_PORT = 3055;
app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`));


app.get('/api/prog', mainCtrl.retrieveData)

app.use(express.json());

