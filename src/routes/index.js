const routers=  require('express').Router();
const campaigns =  require('./campaigns/index');

routers.use('/campaigns' , campaigns);


module.exports = routers;