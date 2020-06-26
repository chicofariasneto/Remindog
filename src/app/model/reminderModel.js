const insertReminder = "INSERT INTO remindog.reminder(\
	id_reminder, fk_user, reminder_on, note)\
    VALUES (DEFAULT, $1, $2, $3) RETURNING id_reminder;"
    
const selectRemindersUser = "SELECT id_reminder, fk_user, reminder_on, note\
    FROM remindog.reminder\
    WHERE fk_user = $1;"

const selectReminderId = "SELECT id_reminder, fk_user, reminder_on, note\
    FROM remindog.reminder\
    WHERE id_reminder = $1;"

const updateReminder = "UPDATE remindog.reminder\
    SET note = $1\
    WHERE id_reminder = $2;"

module.exports = {
    insertReminder,
    selectRemindersUser,
    selectReminderId,
    updateReminder,
}