const sqlite3 = require('sqlite3').verbose();

letdb = new sqlite3.Database('./src/config/db.sqlite', (err) => {
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the In-memry sqlite db')
})

module.exports = letdb