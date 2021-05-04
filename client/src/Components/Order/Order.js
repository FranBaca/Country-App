import React from 'react';
import {useDispatch} from 'react-redux';
import { getCountries } from '../../Actions';
import style from '../Order/Order.module.css'


export default function Order (){
    const dispatch = useDispatch()

    const [parameter, setParameter] = React.useState("name")
    const [order,setOrder]=React.useState("ASC")

    const handleChange=(e)=>{
        const {value}=e.target
        setParameter(value)
        dispatch(getCountries(null,null,null,value,order))
    }

    const handleOrder=(e)=>{
        const {value}=e.target
        setOrder(value)
        dispatch(getCountries(null,null,null,parameter,value))
    }

    return(
        <div className={style.body}>
            <select className={style.option} onChange={handleChange}> 
                <optgroup label="Order by:">
                <option label="Order by:"></option>
                <option value="name">Name</option>
                <option value="population">Population</option>
                </optgroup>
            </select>
        <div>
            <select className={style.option2} onChange={handleOrder}>
                <option value="ASC">Lower to Higher</option>
                <option value="DESC">Higher to Lower</option>
            </select>
        </div>

        </div>
    )


}