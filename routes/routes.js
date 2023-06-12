var express = require('express');

const router = express.Router();

var tacheController = require('../src/tache/tacheController');

router.route('/tache/getAll').get(tacheController.getDataConntrollerfn);

router.route('/tache/create').post(tacheController.createTacheControllerFn);

router.route('/tache/update/:id').patch(tacheController.updateTacheController);

router.route('/tache/delete/:id').delete(tacheController.deleteTacheController);

module.exports = router;