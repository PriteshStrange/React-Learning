import axios from 'axios';

const authFetch = axios.create({
    baseURL :`https://course-api.com`,
   
});

authFetch.interceptors.request.use((request)=>{
    request.headers.common['Accept'] = 'application/json';
    console.log("request sended");
    return request
}
,(err)=>{
    return Promise.reject(err);
})

authFetch.interceptors.response.use((response)=>{
    console.log("got response");
    return response;
},
(error)=>{
    console.log(error);
})
export default authFetch