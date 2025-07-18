import axios from "axios";

const api:any = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const fetchData = ()=>{
    const res:any =  api.get("/users");
    // console.log(res, "1234");
    return  res
}

