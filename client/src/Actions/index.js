import axios from 'axios';
export const countries = "GET_COUNTRIES";
export const search= "SEARCH_COUNTRY";
export const detail ="GET_COUNTRY_DETAIL";
export const activities= "ADD_ACTIVITY";
export const all ="ALL_COUNTRIES";
export const countriesactivities = "COUNTRIES_ACTIVITIES";
export const activitiesList ="ACTIVITIES_LIST";
const env = process.env.REACT_APP_DBURL

export const allCountries=()=>{
    return async(dispatch)=>{
        const all= await axios.get(`${env}/countries/all`)
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
            var countries = await axios.get(`${env}/countries?name=${name}`)
        }
        else if (offset) {
            countries= await axios.get(`${env}/countries?offset=${offset}`)
        }
        else if(continent) {
            countries= await axios.get(`${env}/countries?continent=${continent}`)
        }
        else if(order && upOrDown){
            countries = await axios.get(`${env}/countries?order=${order}&upOrDown=${upOrDown}`)
        }
        else {
             countries= await axios.get(`${env}/countries`)
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
        let byId= await axios.get(`${env}/countries/${id}`)
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
        const activity = await axios.post(`${env}/activities/`,input);
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
        var activitiesbyC = await axios.get(`${env}/countries?nameActivity=${nameActivity}`)
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
        var dataActivities = await axios.get(`${env}/activities`)
        dispatch(Listactivities(dataActivities.data))
    }
}

const Listactivities =(payload)=>{
    return {
        type: activitiesList,
        payload 
    }
}




