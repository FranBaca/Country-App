import React, { useEffect } from 'react'
import {getCountryDetail} from '../../Actions/index'
import {useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import style from '../Country/Country.module.css';


export default function Country () {
   const {id}= useParams()
   const dispatch=useDispatch()
    const details= useSelector(state=> state.country)

    useEffect(()=>{
       dispatch(getCountryDetail(id))
   },[])
        
    console.log(id) 

    return(
        <div className={style.body}>

    <Link className={style.logo} to ="/home"> <h2>Countries App</h2></Link>
            <div className={style.CardCountry}>

           
            <div className={style.country}>
               <img className={style.img}src={details.flag} alt="FLAG NOT FOUND"></img>
            <h2 className={style.titleCountry}>{details.name}</h2>
            <h4 className={style.text}>Alpha Code: {details.code}</h4>
            <h4 className={style.text}>Capital: {details.capital}</h4>
            <h4 className={style.text}>Continent: {details.continent}</h4>
            <h4 className={style.text}>Population: {details.population} M</h4>
            <h4 className={style.text}>Subregion: {details.subregion}</h4>
            {details.Activities?.length>0 &&  
                details.Activities?.map(a=>{
                    return(
                        <h4 className={style.text}>Activities: {a.name}</h4>
                    )
                })
            } 
            </div>
            </div>

               
                  
            
        </div>
    )    
 

        
          
    
}     
    


