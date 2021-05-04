import axios from 'axios';
export const countries = "GET_COUNTRIES";
export const search= "SEARCH_COUNTRY";
export const detail ="GET_COUNTRY_DETAIL";
export const activities= "ADD_ACTIVITY";
export const all ="ALL_COUNTRIES";
export const countriesactivities = "COUNTRIES_ACTIVITIES";
export const activitiesList ="ACTIVITIES_LIST";

export const allCountries=()=>{
    return async(dispatch)=>{
        const all= await axios.get("http://localhost:4001/countries/all")
        dispatch(DB(all.data))
    }
}

const DB=(payload)=>{
    return{
        type: all,
        payload
    }
}


export const getCountries=(name,offset,continent,order,upOrDown)=>{
     return async(dispatch)=>{
        if(name){
            var countries = await axios.get(`http://localhost:4001/countries?name=${name}`)
        }
        else if (offset) {
            countries= await axios.get(`http://localhost:4001/countries?offset=${offset}`)
        }
        else if(continent) {
            countries= await axios.get(`http://localhost:4001/countries?continent=${continent}`)
        }
        else if(order && upOrDown){
            countries = await axios.get(`http://localhost:4001/countries?order=${order}&upOrDown=${upOrDown}`)
        }
        else {
             countries= await axios.get("http://localhost:4001/countries")
        }
        dispatch(action(countries.data))
     }     
};
const action =(payload)=>{
    return {
        type: countries,
        payload
    }}
export const getCountryDetail=(id)=>{
    return async (dispatch)=>{
        let byId= await axios.get(`http://localhost:4001/countries/${id}`)
        dispatch(countryDetail(byId.data))
    }
}

const countryDetail=(payload)=>{
    return{
        type: detail,
        payload
    }
}

export const addActivity=(input)=>{
    return async(dispatch)=>{
        const activity = await axios.post(`http://localhost:4001/activities/`,input);
        dispatch(activityDetail(activity.data))
    }
}

const activityDetail=(payload) =>{
    return{
        type: activities,
        payload
    }
}

export const Countries_Activities=(nameActivity)=>{
    return async (dispatch)=>{
        var activitiesbyC = await axios.get(`http://localhost:4001/countries?nameActivity=${nameActivity}`)
        console.log(activitiesbyC)
        dispatch(action(activitiesbyC.data))
    }
}

const actCout = (payload) =>{
    return{
        type: countriesactivities,
        payload
    }
}

export const getActivities =()=>{
    return async(dispatch)=>{
        var dataActivities = await axios.get("http://localhost:4001/activities")
        dispatch(Listactivities(dataActivities.data))
    }
}

const Listactivities =(payload)=>{
    return {
        type: activitiesList,
        payload 
    }
}




