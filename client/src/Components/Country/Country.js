import React, { useEffect } from 'react'
import {getCountryDetail} from '../../Actions/index'
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom'
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
            <div className={style.country}>
               <img className={style.img}src={details.flag} alt="FLAG NOT FOUND"></img>
            <h2>{details.name}</h2>
            <h4>Alpha Code: {details.code}</h4>
            <h4>Capital: {details.capital}</h4>
            <h4>Continent: {details.continent}</h4>
            <h4>Population: {details.population} M</h4>
            <h4>Subregion: {details.subregion}</h4>
            {details.Activities?.length>0 &&  
                details.Activities?.map(a=>{
                    return(
                        <h4>Activities: {a.name}</h4>
                    )
                })
            } 
            </div>
            

               
                  
            
        </div>
    )    
 

        
          
    
}     
    


