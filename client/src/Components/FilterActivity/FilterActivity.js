import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Countries_Activities, getActivities} from '../../Actions/index';
import style from './FilterActivity.module.css';
export default function FilterActivity (){
    const countriesactivities = useSelector(state => state.activitiesList)
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        var {value}=e.target
        dispatch(Countries_Activities(value))
    }
    React.useEffect(()=>{
        dispatch(getActivities())
    },[dispatch])


    return(
        <div className={style.body}>
            <select  className={style.option} onChange={handleChange}>
                <option  label="Filter by Activity"></option>
                {
                    countriesactivities?.map(c=>{
                        return(
                            <option value={c.name} key={c.id}>{c.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

/*.body{
    align-items: center;
    margin-top: 100px;
    margin-right: 70px;
   }*/