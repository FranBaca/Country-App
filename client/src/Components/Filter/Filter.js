import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getCountries} from '../../Actions/index';
import style from './Filter.module.css'


export default function Filter(){
  const dispatch = useDispatch()

  const filter = useSelector(state=>state.countries)

  const handleChange=(e)=>{
      let {value}=e.target
      dispatch(getCountries(null,null,value))
  }

  return(
      <div className={style.body}>
          <select className={style.option}onChange={handleChange}>
                <optgroup>
                    <option label="Select continent" selected />
                    <option value="Europe">Europe</option>
                    <option value="Americas">Américas</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Africa">Africa</option>
                    <option value="Polar">Polar</option>
                    <option value="Sin Continente">No continent</option>
                </optgroup>


          </select>
      </div>
  )
}
