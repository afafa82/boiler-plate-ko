import axios from 'axios';
import {LOGIN_USER, REGISTER_USER} from './types'
export function loginUser(dataToSubmit) {   

    // /api/users/login 을 만들어 놓은 api 를 이용해서 body  정보를 담아주는거다.
    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response =>response.data)
    return{
        type: LOGIN_USER,
        payload: request
    }
}
export function registerUser(dataToSubmit) {   
    // /api/users/register 을 만들어 놓은 api 를 이용해서 body 정보를 담아주는거다.
    const request = axios.post('/api/users/register', dataToSubmit)
    .then(response =>response.data)

    return{
        type: REGISTER_USER,
        payload: request
    }
}