const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklistController');

router.get('/checklist', checklistController.evaluateChecklist);

module.exports = router;
