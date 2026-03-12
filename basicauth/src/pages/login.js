import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/loginService";
export default function Login(){
    const [data,setData] = useState({ userName:"",password:""})
    const [error,setError] = useState(null);
    const nav = useNavigate();
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await loginService(data);
        if(!res.error){
            localStorage.setItem("token",res.token)
            nav("/")
        }
        else
            setError("Invalid Credentials")
    }
    return(
    <div align="center">
        <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <br/>
            {error && <p style={{color:"red"}}>{error}</p>}
            <br/>
            <input type="text"
                    name="userName"
                    value={data.userName}
                    placeholder="Enter username"
                    onChange={handleChange}/>
            <br/><br/>
            <input type="password"
                    name = "password"
                    value={data.password}
                    placeholder="Enter password"
                    onChange={handleChange}/>
            <br/><br/>
            <button type="submit">Login</button>
            
        </form>
    </div>
    )
}