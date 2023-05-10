import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "p4Xap#23xemql9",
    database: "crud_node"
})

