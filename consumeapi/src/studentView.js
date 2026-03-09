import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
const API_URL = "https://699c64c5110b5b738cc2902a.mockapi.io/students";

export default function StudentView(){
    const {id} = useParams();
    const [student,setStudent] = useState(null);
    const nav = useNavigate();
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await axios.get(`${API_URL}/${id}`);
                setStudent(res.data);
            }catch(e){
                console.error(e);
            }
        }
        fetchData();
    },[id])
    return(
    <div align="center">
        <h1>Student View {id}</h1>
        {student && 
            <>
            <p><strong>Name:</strong>{student.name}</p>
            <p><strong>Roll No:</strong>{student.rollno}</p>
            <p><strong>Subject:</strong>{student.course}</p>
            <p><strong>Email:</strong>{student.email}</p>
            <p><button onClick={()=>nav('/')}>Back</button></p>
            </>
        }
    </div>
    )
}   