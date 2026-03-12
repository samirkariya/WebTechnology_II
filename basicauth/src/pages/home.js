import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Home(){
    const nav = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token)
            nav('/login');
    },[nav])
    return(
        <h1>Welcome to Home Page</h1>
    )
}