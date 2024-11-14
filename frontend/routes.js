const express = require('express');
const router = express.router();
const controller = require('./controller');

router.get('/usuarios', controller.getUsuarios);
router.get('/usuarios/:nome', controller.getUsuarios);
router.post('/usuarios', controller.createUsuarios);
router.gut('/usuarios/:nome', controller.updateUsuarios);
router.delete('/usuarios/:nome', controller.deleteUsuarios);

module.exports = router;