const userModel = require('../models/userModel')

exports.getAllUsers = (req, res, next) => {
    try {
        userModel.getAllUsers((error, results) => {
        if (error && !results) {
          res.status(500).json({
            status: "error",
            message: "Fetching Details failed!",
            error: error.message,
          });
        } else {
          res.status(200).json({
            status: "success",
            message: "Fetching Details Successfull!",
            result: results,
          });
        }
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: "Fetching Details failed!",
        error: err.message,
      });
    }
};


exports.getUserById = (req, res) => {
    try {
        const userId = req.params.id;
        const validateUserId = /^\d+$/;
        if (!validateUserId.test(userId)) {
            return res.status(400).json({ 
                message: 'Invalid userId format' 
            });
        }
        userModel.getUserById(userId, (error, userInfo) => {
            if (error) {
                return res.status(500).json({ 
                    status: 'error', 
                    message: 'Fetching Details failed!', 
                    error: error.message 
                });
            }
            if (!userInfo) {
                return res.status(404).json({ 
                    message: 'User not found' 
                });
            }
            res.status(200).json({
                 status: 'success', 
                 message: 'Fetching Details Successful!', 
                 result: userInfo });
            });
    } catch (error) {
        res.status(500).json({ 
            status: 'error', 
            message: 'Fetching Details failed!', 
            error: error.message 
        });
    }
};


exports.createUsers = (req, res) => {
    try {
        const { username, age, hobbies } = req.body;
        if (!username || !age) {
            return res.status(400).json({ 
                message: 'Username and age are required' 
            });
        }
        userModel.createUser(username, age, hobbies, (error, result) => {
            if (error) {
                return res.status(500).json({ 
                    status: 'error', 
                    message: 'Failed to create user', 
                    error: error.message 
                });
            }
            res.status(201).json({ 
                status: 'success', 
                message: result.message, 
            });
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'error', 
            message: 'Failed to create user', 
            error: error.message 
        });
    }
};

exports.updateUsers = (req, res) => {
    try {
        const userId = req.params.id;
        const { username, age, hobbies } = req.body;
        const validateUserId = /^\d+$/;
        if (!validateUserId.test(userId)) {
            return res.status(400).json({ 
                message: 'Invalid userId format' 
            });
        }
        userModel.updateUser(userId, username, age, hobbies, (error, updatedUser) => {
            if (error) {
                return res.status(500).json({ 
                    status: 'error', 
                    message: 'Failed to update user', 
                    error: error.message 
                });
            }
            if (!updatedUser) {
                return res.status(404).json({ 
                    message: 'User not found' 
                });
            }
            res.status(200).json({ 
                status: 'success', 
                message: 'User updated successfully', 
            });
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'error', 
            message: 'Failed to update user', 
            error: error.message 
        });
    }
};

exports.deleteUser = (req, res) => {
    try {
        const userId = req.params.id;
        const validateUserId = /^\d+$/;
        if (!validateUserId.test(userId)) {
            return res.status(400).json({ 
                message: 'Invalid userId format' 
            });
        }
        userModel.deleteUser(userId, (error, result) => {
            if (error) {
                return res.status(500).json({ 
                    status: 'error', 
                    message: 'Failed to delete user', 
                    error: error.message 
                });
            }
            if (result === 0) {
                return res.status(404).json({ 
                    message: 'User not found' 
                });
            }
            return res.status(200).json({ 
                message: 'User Deleted Successfully' 
            });
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'error', 
            message: 'Failed to delete user', 
            error: error.message 
        });
    }
};