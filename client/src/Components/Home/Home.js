import React, { useState } from 'react';
import style from './Home.module.css';
import SearchBar from '../SearchBar/SearchBar'
import {useSelector, useDispatch} from 'react-redux';
import {getCountries} from '../../Actions/index';
import Filter from '../../Components/Filter/Filter'
import Order from '../Order/Order'
import FilterActivity from '../FilterActivity/FilterActivity'
import {Link} from 'react-router-dom'
import {Card} from '../Card/Card'
import ReactPaginate from "react-paginate"

export default function Home(){

        const country= useSelector(state=> state.countries);
        const [pageNumber, setPageNumber] = useState(0)
        const countryPerPage = 10 
        const pagesVisited = pageNumber * countryPerPage


        const dispatch = useDispatch()

       
       React.useEffect(()=>{
            dispatch(getCountries())
        },[dispatch])

       


        const displayCountries = country?.slice(pagesVisited, pagesVisited+countryPerPage)
        .map((c) =>{
            console.log(country)
                if(!c.id){
                                
                    return <div className={style.msg}>{c.name}</div>
                    }else{
                    return (<div key={c.id}>
                     <Link to={`/country/${c.id}`}>
                        <Card c={c} />
                   </Link>
                </div>)
                    }
                
            
        } );
        const pageCount = Math.ceil(country.length / countryPerPage)

        const changePage = ({selected}) =>{
            setPageNumber(selected)
    
        };
    
     

        return(

            
            <div className={style.body}>
                <SearchBar />
                <div className={style.countries} > 
            {displayCountries}
              

                       
                  
                    <ReactPaginate 

                      previousLabel={"Back"}
                      nextLabel={"Next"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                     containerClassName={style.paginationBttns}
                     previousLinkClassName={"previousBttns"}
                     nextLinkClassName={"nextBttn"}
 
                    />
                   
    
                     
    
            </div>
            <footer className={style.pag}>
        
            </footer>
           
            <footer className={style.filters}>
                <Filter />
                <Order />
                <FilterActivity />   
               </footer>
               
            
            </div>
           
            
                
            


        )
}