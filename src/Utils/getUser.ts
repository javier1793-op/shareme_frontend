import axios from 'axios'
import jwt_decode from 'jwt-decode'


export const createOrGetUser = async (response:any)=>{
    
    const decoded:{name:string, picture:string, sub:string}= jwt_decode(response.credential)
    localStorage.setItem('user',JSON.stringify(decoded))

    const {name, picture, sub} = decoded

    const data= {
        _id: sub,
        _type: 'user',
        userName:name,
        image:picture
    }

} 
   
 