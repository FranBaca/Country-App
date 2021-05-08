import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import {addActivity} from '../../Actions/index';
import {useDispatch} from 'react-redux';
import {allCountries} from '../../Actions/index'
import style from './Activity.module.css'
import {Link} from 'react-router-dom'
import {Modal, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles ((theme) =>({
    modal:{
        position: "absolute",
        width: 400,
        backgroundColor:"white",
        border: "2px solid #000",
        boxShadow:theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top: "50%",
        left:"50%",
        transform: "translate(-50%, -50%)"
    },
    
}))



export default function Activities(){
    const styles = useStyles();
    const [modal, setModal]=useState(false);

    const openCloseModal =() =>{
        setModal(!modal);
        dispatch(addActivity(input))
    }
    const body =(
        <div className={styles.modal}>
            <div align="center">
                <h2>The Activity has been added</h2>
            </div>
        </div>
    )
    const countriesAll= useSelector(state => state.countriesNameID)
    const dispatch = useDispatch()
    console.log(countriesAll)
    const [input,setInput] = React.useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        country:[]
    });

    React.useEffect(()=>{
        dispatch(allCountries())
    },[]);

    const handleActivity=(e)=>{
        if(e.target.name!=="country"){
            setInput({
                ...input,
                [e.target.name]:e.target.value
            }) 
        }else{
            setInput({
                ...input,
                country:Array.from(e.target.selectedOptions, (option)=> Number(option.value))})
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
       
    }

    return (
        <div className={style.body}>
            <div className={style.home}><Link  to={"/home"} >Home</Link></div>
            <h2 className={style.title}>It will not be fun if you don't plan your activities... <span className={style.titlebig}>Do it here!</span></h2>
            <div>
        <form className={style.form} onSubmit={handleSubmit}> 
           <div className={style.form}>
         <input className={style.input}
          name="name"
          type="text"
          placeholder="Name of activity..." 
          onChange={handleActivity}
          value={input.name}
        />
         <input className={style.input}
          name="difficulty"
          type="text"
          placeholder="Difficulty..." 
          onChange={handleActivity}
          value={input.difficulty}
        />
         <input className={style.input}
          name="duration"
          type="text"
          placeholder="Duration..." 
          onChange={handleActivity}
          value={input.duration}
        />
        <select className={style.input}   onChange={handleActivity} name="season"
        placeholder="Season...">
            <option label="Season..."></option>
            <option value="Winter">Winter</option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
        </select>

        <div className={style.container}>
        <select className={style.select}  onChange={handleActivity} name="country" id="countries" multiple>
            <option className={style.option} label="Select the countries where the activity will take place"></option>
        {
            countriesAll?.map(c=>{
                return(
                    <option className={style.option} key={c.id} value={Number(c.id)}>{c.name}</option>
                )
            })
        }
        
        </select>
        </div> 
        <button className={style.addButton} onClick={()=>openCloseModal()} type="submit">Add</button>
        <Modal 
        open={modal}
        onClose={openCloseModal}>
            {body}
        </Modal>
       
        
        </div> 
        
        </form>
        </div>
        </div>
    )


}


