import React from 'react';
import style from './Home.module.css';
import SearchBar from '../SearchBar/SearchBar'
import {useSelector, useDispatch} from 'react-redux';
import {getCountries} from '../../Actions/index';
import Pagination from '../Pagination/Pagination'
import Filter from '../../Components/Filter/Filter'
import Order from '../Order/Order'
import FilterActivity from '../FilterActivity/FilterActivity'
import {Link} from 'react-router-dom'
import {Card} from '../Card/Card'

export default function Home(){

        const country= useSelector(state=> state.countries);


        const dispatch = useDispatch()

       
       React.useEffect(()=>{
            dispatch(getCountries())
        },[]);
     

        return(

            
            <div className={style.body}>
                <SearchBar />
   
                <div className="countries">

                <div className={style.countries} >              
                {  
                    
                        country && country.map(c =>{
                            if(!c.id){
                            return <div className={style.msg}>{c.name}</div>
                            }else{
                            return (<div key={c.id}>
                             <Link to={`/country/${c.id}`}>
                                <Card c={c} />
                           </Link>
                        </div>)
                            }
                        }
                        
                        
                    )
                    }  
                    
                
    
                    
    
            </div>
            <footer className={style.pag}>
                <Pagination /> 
            </footer>
           
            <footer className={style.filters}>
                <Filter />
                <Order />
                <FilterActivity />   
               </footer>
               
            </div>
            </div>
           
            
                
            


        )
}