import axios from "axios";
import config from '../config.json';

export function validarToken(){
    
     
    axios.post(config.SERVER_URL+"/api/auth/validate" ,{
        "access_token": localStorage.getItem("access_token")
    }).then(function(response){
        console.log(response);
    });
    return true;
}