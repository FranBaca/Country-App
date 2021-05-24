import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import {addActivity} from '../../Actions/index';
import {useDispatch} from 'react-redux';
import {allCountries} from '../../Actions/index'
import style from './Activity.module.css'
import {Link} from 'react-router-dom'
import Modal from 'react-modal';






export default function Activities(){

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          background            : "#C79C7C"
        }
      };


      var subtitle;
      const [modalIsOpen,setIsOpen] = React.useState(false);
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
      }
    
      function closeModal(){
        setIsOpen(false);
      }

    const countriesAll= useSelector(state => state.countriesNameID)
    const dispatch = useDispatch()
    const [input,setInput] = React.useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        country:[]
    });

    React.useEffect(()=>{
        dispatch(allCountries())
    },[dispatch]);

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
        dispatch(addActivity(input))
    }

    return (
        <div className={style.body}>
          <Link className={style.logo} to ="/home"> <h2>Countries App</h2></Link> 
           
            <h2 className={style.title}>It will not be fun if you don't plan your activities... <span className={style.titlebig}>Do it here!</span></h2>
           
        <form onSubmit={handleSubmit}> 
           <div className={style.container}>
             <div className={style.containerInputs}>
 
             
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
        </div>
        <div className={style.containerSelect}>
        
        <select className={style.select}onChange={handleActivity} name="country" id="countries" multiple>
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
        </div> 


        <div>
       
       <Modal
         isOpen={modalIsOpen}
         onAfterOpen={afterOpenModal}
         onRequestClose={closeModal}
         style={customStyles}
         contentLabel="Example Modal"
       >

         <h2 ref={_subtitle => (subtitle = _subtitle)}>Confirm</h2>
         <div>¿Are you sure you want to add this activity?</div>
           <button className={style.addButton} onClick={closeModal} type="submit">Add</button>
           <button className={style.addButton} onClick={closeModal}>Cancel</button>
       </Modal>
     </div>

        <div className={style.containerButton}>
        <button className={style.addButton} onClick={openModal}>Add</button>
        </div>
        

        
        
        </form>
        </div>
    )


}


