const { Activity, Country} = require ('../../db');
const { allCountries } = require('./country.controllers');

async function addActivity (req,res){
    const {name,difficulty,duration,season,country}= req.body
    console.log(req.body)
       const setActivity= await Activity.create({
           name,
           duration,
           difficulty,
           season
       })
       setActivity.addCountries(country);
       res.json(setActivity)
   }

async function getActivities(req,res){
    const allActivities = await Activity.findAll()
    return res.json(allActivities)
}   
   




module.exports={ addActivity, getActivities };
