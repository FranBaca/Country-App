import React from 'react'
import style from '../Home/Home.module.css';

export const Card = ({c}) => {
    return (
        <div>
             <li className= {style.country}>
                            <img src={c.flag} alt="FLAG NOT FOUND"
                            className={style.img}
                            ></img>
                            <div>
                                  <div className={style.title}>{c.name}</div>
                            <div className={style.continent}>{c.continent}</div>
                            </div>
                           </li>
        </div>
    )
}
