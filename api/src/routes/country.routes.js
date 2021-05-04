const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getCountries, getCountry,allCountries} = require ('./controllers/country.controllers');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/all",allCountries)

router.get("/",getCountries)

router.get("/:idPais",getCountry)








module.exports=router;