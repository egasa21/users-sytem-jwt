var express = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
var router = express.Router();
/* GET home page. */
router.get('/', requireAuth, function(req, res, next) {
  res.render('protected');
});

module.exports = router;
