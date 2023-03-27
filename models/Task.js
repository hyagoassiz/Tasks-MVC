const Sequelize = require("sequelize")

const db = require("../db/conn")

const Task = db.define("Task", {
    title: {
        type: Sequelize.STRING,
        require: true
    },
    description: {
        type: Sequelize.STRING,
        require: true
    },
    done: {
        type: Sequelize.BOOLEAN,
        require: true
    }
})

module.exports = Task