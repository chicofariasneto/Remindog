const { pool } = require('../../database/connection')

const {
    insertUser,
    selectUser,
} = require('../model/userModel')

// true if there is false if not
const checkUser = async (idUser) => {
    const user = await pool.query(selectUser, [idUser])
    return user.rowCount > 0
}

const findUser = async (idUser) => {
    const user = await pool.query(selectUser, [idUser])
    return user.rows[0]
}

// If there is, do nothing. if not, create
const manageUser = async (idUser, username) => {
    const user = await checkUser(idUser)
    
    if (user)
        return

    await pool.query(insertUser, [idUser, username, 'false', ""])
}

module.exports = {
    checkUser,
    findUser,
    manageUser,
}