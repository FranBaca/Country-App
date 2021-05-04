import React from 'react';
import style from './About.module.css';
import {Link} from 'react-router-dom'

export default function About(){
    return(
    <div className={style.body}>
        <div className={style.home}><Link  to={"/home"} >Home</Link></div>
        <h2 className={style.title}>This is a personal project created for the Henry bootcamp</h2>
        <p className={style.subtitle}>Created by Baca Alurralde Francisco Javier</p>
        <p className={style.subtitle}>Github:FranBaca</p>
    </div>
    
)
}
