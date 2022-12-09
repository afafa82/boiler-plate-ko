import axios from 'axios';
import {LOGIN_USER, REGISTER_USER, AUTH_USER } from './types'
export function loginUser(dataToSubmit) {   

    // /api/users/login 을 만들어 놓은 api 를 이용해서 body  정보를 담아주는거다.
    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response =>response.data)

    //request를 Action에 넘겨주는 작업이다.
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

//Get method니깐 인자(body)는 필요없다
export function auth() {   
    // /api/users/register 을 만들어 놓은 api 를 이용해서 body 정보를 담아주는거다.
    const request = axios.get('/api/users/auth')
    .then(response =>response.data)

    return{
        type: AUTH_USER,
        payload: request
    }
}