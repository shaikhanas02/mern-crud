import axios from "axios";

const URL = "http://localhost:8000" ;

export const addUser = async(data) => {
    try{
       await axios.post(`${URL}/adduser`, data) 

    } catch(error){
        console.log('Error while calling user api', error) ;
    }
}
 


  