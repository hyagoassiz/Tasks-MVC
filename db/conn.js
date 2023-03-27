const Sequelize = require("sequelize") 
const sequelize = new Sequelize("banco1", "root", "1234", {
    host: "localhost",
    dialect: "mysql"
})

try {
    sequelize.authenticate()
    console.log("Conectado ao Banco de Dados")

} catch(error) {
    console.log(`Não foi possível conectar ao MySQL: ${error}`)
}

module.exports = sequelize