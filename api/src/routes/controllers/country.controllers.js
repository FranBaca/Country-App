const { Country, Activity } = require ('../../db');
const { Op } = require("sequelize");
const axios= require('axios');


 async function getCountries(req,res){
    if(req.query.offset){
        const {offset} =req.query
        const nextPage= await Country.findAll({offset,limit:10})
        return res.json(nextPage)
    }

    else if(req.query.name){ 
        const {name} = req.query
        const nameSearch = await Country.findAll({where:{name:{[Op.iLike]:`%${name}%`}}}) 
        if(nameSearch.length>0){
             return res.json(nameSearch) 
        }else{
            return res.status(200).json([{name:"The country does not exist"}])
        }

       
    }
    else if(req.query.order){
        const {order} = req.query
        if(req.query.upOrDown){
            const {upOrDown} = req.query
            const descend= await Country.findAll({order:[[order,upOrDown]]})
            res.json(descend);
        }else{
            const ascend = await Country.findAll({order:[[order]]})
            res.json(ascend);
        }

    } 
        
    else if(req.query.continent){
        const {continent} = req.query
        const filterContinent = await Country.findAll({where:{continent}})
        return res.json(filterContinent);
    }

    else if(req.query.nameActivity){//
        const {nameActivity} = req.query
        const filterActivity =await Country.findAll({
            include: {
              model: Activity,
              where: {
                name: nameActivity
              },
              required: true
            }
          });
        return res.json(filterActivity)
    }


    axios.get('https://restcountries.eu/rest/v2/all')
    .then(result =>{
    return result.data.map(async p =>{
        
        await Country.findOrCreate({
            where:{
                name: p.name,
            },
            defaults:{
                capital: p.capital,
                continent: p.region===''?'Sin Continente':p.region,
                area: p.area,
                population: p.population,
                flag: p.flag,
                subregion: p.subregion,
                code: p.alpha3Code
            }
           
        })
    });
    
    
    
    
})
.catch(error => console.log("Error al cargar los datos", error)) 


    .then(async()=> {
        const firstTen= await Country.findAll({offset:0, limit: 10,order:[["name","ASC"]]})
    res.status(200).json(firstTen)
})

}
   
async function getCountry (req,res){
    const id = req.params.idPais
    const country = await Country.findByPk(Number(id),{include:Activity})
    res.json(country)
}

async function allCountries (req,res){
    const allCountries = await Country.findAll({attributes:["name","id"]})
    return res.json(allCountries)
}



module.exports = {getCountries, getCountry, allCountries}
   




