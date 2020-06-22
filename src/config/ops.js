const db = require('./db') 

const insert = (table,cols,vals) => {
    /* 
        create a string of '?' to match the number of columns in the table
        separated by commas
    */ 
    var dels = '?,'.repeat(cols.length)
    dels = dels.split(',')
    dels.pop()

    var sql = `INSERT INTO ${table}(${cols}) VALUES(${dels.join()})`
    db.run(sql, [...vals], (err) => {
        if(err) {
            return console.error(err.message)
        }
        console.log('New row Inserted!')
    })
}

const selectAll = (table) => {

    var sql = `SELECT *  FROM ${table}`
    db.all(sql,[], (err,rows)=>{
        if(err){
            return console.error(err.message)
        } else {
           return rows
        }
    })
}


module.exports = insert
module.exports = selectAll