const express           = require('express');
const router            = express.Router();
const movieController   = require('../controllers/movieController');
// const logger            = require('../middlewares/logger');

router.get('/search', movieController.getAll);
router.get('/detail/:id', movieController.findById);

module.exports = router;