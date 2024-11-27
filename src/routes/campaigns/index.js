const  router = require('express').Router();
//importing campaign controller
const  campaigns = require('../../controller/campaigns');

router.post("/send" , campaigns.sendValidator , campaigns.send);

module.exports = router;    