import { getCountries } from "../../Actions";
import React from 'react';
import {useDispatch} from 'react-redux';
import style from '../Pagination/Pagination.module.css';

export default function Pagination(){

    const [offset,setOffset] =React.useState(0)
    

    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    const handleClickNext=()=>{
        if(offset+10<250){
            setOffset(offset+10)
            dispatch(getCountries(null,offset+10))
        }
    }

    const handleClickBack=()=>{
        if(offset-10>=0){
            setOffset(offset-10)
            dispatch(getCountries(null,offset-10))
        }
    }

    return(
        <div className={style.body} >
            <ul>
                {/*
                    info?.map(i=>{
                        return(<li id={i.id} key={i.id}>
                            <img src={i.flag} alt="FLAG NOT FOUND" />
                            <Link to={`/country/${i.id}`}>{i.name}</Link>
                            </li>)
                    })
                */}
            </ul>
            <div>
                 <button className={style.button} onClick={handleClickBack}>Prev</button>
            <button className={style.button} onClick={handleClickNext}>Next</button>
            </div>
           
        </div>
    )


}