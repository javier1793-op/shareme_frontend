import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import {client} from '../client'

export const createOrGetUser = async (response:any)=>{

    const navigate = useNavigate();

    
    const decoded:{name:string, picture:string, sub:string}= jwt_decode(response.credential)
    localStorage.setItem('user',JSON.stringify(decoded))
    console.log(decoded.name)
    const {name, picture, sub} = decoded
    
    const data= {
        _id: sub,
        _type: 'user',
        userName:name,
        image:picture
    }

    client.createIfNotExists(data).then(() => {
        navigate('/', { replace: true });
      });
   
} 
   
 