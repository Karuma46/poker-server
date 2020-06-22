const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000

require('./src/config/db')

app.use(cors());
app.use(bodyParser.json());

var router  = require('./src/routes/index')
app.use('/', router)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});