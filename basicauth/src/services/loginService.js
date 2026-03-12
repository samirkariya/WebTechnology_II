import axios from "axios"
const API_URL = "https://699c64c5110b5b738cc2902a.mockapi.io/users"
export const loginService = async (data)=>{
    const res = await axios.get(API_URL);
    const users = res.data;
    console.log(users);
    const user = users.find(
        (u)=>u.userName === data.userName && u.password === data.password
    )
    console.log("User = ",user);
    if(user){
        return {
            token:"demo_token_123",
            name:user.userName,
            error:false
        }
    }
    else{
        return {
            error:true
        }
    }
}