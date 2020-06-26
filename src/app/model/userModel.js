const insertUser = "INSERT INTO remindog.dog(\
	    id_user, username, serving, service, reminder_aux)\
        VALUES ($1, $2, $3, $4, null);"
        
const selectUser = "SELECT id_user, username, serving, service, reminder_aux\
    FROM remindog.dog\
    WHERE id_user = $1;"

const updateUser = "UPDATE remindog.dog\
    SET serving = $1, service = $2, reminder_aux = $3\
    WHERE id_user = $4;"

module.exports = {
    insertUser,
    selectUser,
    updateUser,
}