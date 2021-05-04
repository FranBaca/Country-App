import {countries, detail, activities, all, countriesactivities, activitiesList} from '../Actions/index';


const initialState = {
    countries: [],
    country:[],
    countriesNameID:[],
    activities: [],
    countriesActivities:[],
    activitiesList:[]
};

export const countryReducer = (state= initialState,action)=>{
    switch(action.type){
        case countries:
            return{
                ...state,
                countries: action.payload
            }  
        case detail:
            return{
                ...state,
                country: action.payload
            }
        case  activities:
            return {
                ...state,
                activities: state.activities.concat(action.payload)
            }
        case all:
            return{
                ...state,
                countriesNameID: action.payload
            }
        case countriesactivities:
            return{
                ...state,
                countriesActivities: action.payload
            }
        case activitiesList:
            return{
                ...state,
                activitiesList: action.payload

            }            
        
        default: return state
    }
   
}

