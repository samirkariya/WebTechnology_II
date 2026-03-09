import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const API_URL = "https://699c64c5110b5b738cc2902a.mockapi.io/students";
export default function StudentList(){
    const [students,setStudents] = useState([]);
    const [loading,setLoading] = useState(false);
    const nav = useNavigate();
    const fetchData = async ()=>{
        setLoading(true);
        try{
        const res= await axios.get(API_URL);
        setStudents(res.data);
        }catch(err){
            console.error(err);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[])

    const handleDel = async (id)=>{
        try{
                if(window.confirm('Are you sure you want to delete??'))
                    await axios.delete(`${API_URL}/${id}`)
        }catch(err){
            console.log(err);
        }
        fetchData();
    }

    return(
    <div align="center">
        <h1>Student List</h1>
        {loading ?<p>Loading...</p> :
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(s=>
                        <tr key={s.id}>
                            <td>{s.name}</td>
                            <td>{s.rollno}</td>
                            <td>
                                <button onClick={()=>nav(`/${s.id}`)}>View Details</button>
                                <button onClick={()=>nav(`/edit/${s.id}`)}>Edit</button>
                                <button onClick={()=>handleDel(`${s.id}`)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        }
    </div>
    )
}