const pool = require("../middleware/connection");
const util = require('util');
const query = util.promisify(pool.query).bind(pool);

exports.getAllUsers = async (callback) => {
    try {
        const userQuery = `SELECT * FROM users`
        const userInfo = await query(userQuery);
        callback(null, userInfo)
    } catch (error) {
        callback(error, null)
    }
};

exports.getUserById = (userId, callback) => {
    try {
        const userQuery = 'SELECT * FROM users WHERE id = ?';
        query(userQuery, [userId], (error, user) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, user.length > 0 ? user[0] : null);
            }
        });
    } catch (error) {
        callback(error, null);
    }
};

exports.createUser = async (username, age, hobbies, callback) => {
    try {
        let response = {}
        const checkUserExists = `SELECT id FROM users WHERE username = ?`
        const userExist = await query(checkUserExists,[username]);
        if(userExist.length < 1){
            const insertUserQuery = 'INSERT INTO users (username, age, hobbies) VALUES (?, ?, ?)';
            query(insertUserQuery, [username, age, JSON.stringify(hobbies)], (error, result) => {
                if (error) {
                    callback(error, null);
                } else {
                    response.message = 'User Added Successfully'
                    callback(null, response);
                }
            });
        }else{
            response.message = 'User Already Exist'
            callback(null, response);
        }
    } catch (error) {
        callback(error, null);
    }
};

exports.updateUser = (userId, username, age, hobbies, callback) => {
    try {
        const checkUser = 'SELECT * FROM users WHERE id = ?';
        query(checkUser, [userId], (error, user) => {
            if (error) {
                callback(error, null);
            } else if (user.length === 0) {
                callback(null, null);
            } else {
                const updateUser = 'UPDATE users SET username = ?, age = ?, hobbies = ? WHERE id = ?';
                query(updateUser, [username, age, JSON.stringify(hobbies), userId], (error, result) => {
                    if (error) {
                        callback(error, null);
                    } else {
                        callback(null, true);
                    }
                });
            }
        });
    } catch (error) {
        callback(error, null);
    }
};

exports.deleteUser = (userId, callback) => {
    try {
        const deleteUserQuery = 'DELETE FROM users WHERE id = ?';
        query(deleteUserQuery, [userId], (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result.affectedRows);
            }
        });
    } catch (error) {
        callback(error, null);
    }
};

