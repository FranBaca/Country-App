import React from "react";
import style from './landingpage.module.css';
import {Link} from 'react-router-dom';
import logo from '../logos/Logo.png';


export default function LandingPage(){
    return(
        <div className={style.body}>
            <header>
                  <div className={style.logo}>
                      <img className={logo} src={logo} alt="IMG NOT FOUND"></img>
                    </div>
            </header>

            <div className={style.content}>
                <div class="textbox">
                    <h2 className={style.title}>LIFE IS SHORT AND THE WORLD IS <span className={style.big}>WIDE</span></h2>
                    <p className={style.subtitle}>” The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.”</p>
                    
                 <Link to= "/home">
                 <button className={style.button} >Learn More</button>  
            </Link>
            </div> 
            
            </div> 
            </div>
            
        
            

               
                
        
    )
}
