import React from 'react'
import style from '../SearchBar/SearchBar.module.css';
import {getCountries} from '../../Actions/index';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../../logos/Logo.png';

export default function SearchBar (){

   const dispatch = useDispatch()

const [name, setName]=React.useState("")

function handleChange(event){
    setName(event.target.value);
}

function handleSubmit(event){
    event.preventDefault()
    dispatch(getCountries(name))//TENER CUIDADO CON SEARCHCOUNTRY O GETCOUNTRIES CAMBIANDO ACTION
}

return(
    <div className="body">
    <div className="container">
        <nav className={style.nav}>
            <Link className={style.logo} to ="/"> <h2>Countries App</h2></Link> 
            
    <Link className={style.about}  to="/about">About</Link>
    <Link className={style.about} to="/activity">Add Activity</Link>
    <form  onSubmit={handleSubmit}>
            <label htmlFor="country"></label>
            <input className={style.search}
            type="text"
            autoComplete="off"
            value={name}
            placeholder="Search a country..."
            onChange={handleChange}
            >
            </input>

            <button className={style.searchButton} id="button" type="submit" value="Agregar">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg></button>
            {console.log(name)}
    </form>
        </nav>
   
    <ul>
    </ul>
    </div>
    </div>
) 
}

