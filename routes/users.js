const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

router.post('/users', userController.createUsers);

router.put('/users/:id', userController.updateUsers);

router.delete('/users/:id', userController.deleteUser);

router.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});


module.exports = router;
