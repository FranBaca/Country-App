const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { addActivity, getActivities} = require ('./controllers/activities.controller');
const router = Router();


router.get ("/", getActivities) 
router.post('/',addActivity);


module.exports=router;