const {Router} = require('express');
const {frontRefresh, backRefresh} = require('../controllers/monitor');
const router = Router();

router.post('/church_billboard_front_refreshed', frontRefresh);
router.post('/church_billboard_back_refreshed', backRefresh);

module.exports = router;