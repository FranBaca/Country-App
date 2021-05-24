import React from 'react';
import style from './About.module.css';
import {Link} from 'react-router-dom'
import profile from "../../logos/Perfil.jpeg"
import linkedinLogo from "../../logos/linkedin.svg"
import githubLogo from "../../logos/github.svg"



export default function About(){
    return(
    <div className={style.body}>
        <Link className={style.logo}  to={"/home"} ><h2> Countries App </h2></Link>
        <div style={{display: "flex", justifyContent:"center"}}>
        <div className={style.cardInfo}>
            
        <h2 className={style.title}>About me</h2>
        <img src={profile} className={style.image} alt="not found" />
        <p>Francisco Baca Alurralde</p>
        <div className={style.logosContainer}>
        <a href="https://www.linkedin.com/in/franbaca13/"><img style={{   height: "45px", width:" 45px", marginRight:"20px"}} src={linkedinLogo} alt="not found" ></img></a>
        
        <a href="https://github.com/FranBaca"><img style={{   height: "45px", width:" 45px",marginLeft:"20px"}} src={githubLogo} alt="not found" /></a>
        </div>
        </div>
        </div>
    </div>
    
)
}
