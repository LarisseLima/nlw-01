// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {

    // com commandos SQL eu vou:

    // // 1 Criar uma tabela 
    // db.run(`
    // CREATE TABLE IF NOT EXISTS places (
    // id INTEGER PRIMARY KEY AUTOINCREMENT,
    // image TEXT,
    // name TEXT,
    // address TEXT,
    // address2 TEXT,
    // state TEXT,
    // city TEXT,
    // items TEXT
    // );
    // `)

    // // 2 Inserir dados na tabela
    // const query = `
    // INSERT INTO places (
    // image,
    // name,
    // address,
    // address2,
    // state,
    // city,
    // items
    // ) VALUES (?,?,?,?,?,?,?);
    // `

    //const values = [
    //"http://localhost:3000/icones/vivianne-lemay-unsplash.jpg",
    // "Papersider",
    // "Rua do Bonfim, Carmo",
    // "Número 135",
    // "Pernambuco",
    // "Olinda",
    // "Papéis e Papelão"
    // ]

    //function afterInsertData(err) {
    //   if (err) {
    //     return console.log(err)
    //  }

    //  console.log("Cadastrado com sucesso")
    //  console.log(this)
    //  }

    //db.run(query, values, afterInsertData)



    // 3 Consultar os dados da tabela
    //db.all(`SELECT  * FROM places`, function (err, rows) {
    // if (err) {
    //return console.log(err)
    // }

    // console.log("Aqui estão seus registros: ")
    //console.log(rows)
    // })


    //4 Deletar um dado da tabela
    //db.run(`DELETE FROM places WHERE id = ?`, [11], function (err) {
    //if (err) {
    //return console.log(err)
    //}

    // console.log("Registro deletado com sucesso!")
    // })



})


