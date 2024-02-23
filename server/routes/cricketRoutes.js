const express = require('express');
const router = express.Router();
const cricketController = require('../controllers/cricketController');

router.get('/recent-matches', cricketController.recentMatches);
router.get('/match-center', cricketController.matchCenter);
router.get('/team-info', cricketController.teamInfo);
router.get('/comments', cricketController.comments);
router.get('/overs', cricketController.overs);
router.get('/scard', cricketController.scard);
router.get('/hscard', cricketController.hscard);
router.get('/leanback', cricketController.leanback);

module.exports = router;
