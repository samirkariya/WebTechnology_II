import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
const API_URL = "https://699c64c5110b5b738cc2902a.mockapi.io/students";
export default function StudentEdit(){
    const {id} = useParams();
    const nav = useNavigate();
    const [formsData,setFormsData] = useState({
        name:"",
        rollno:"",
        course:"",
        email:"",
        mobileno:""
    });
    useEffect(()=>{
        // console.log("Test");
        const fetchData = async ()=>{
            try{
                    const res = await axios.get(`${API_URL}/${id}`);
                    setFormsData(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[])
    const handleChange = (e)=>{
        setFormsData({
            ...formsData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log("Test");
        try{
            await axios.put(`${API_URL}/${id}`,formsData);
            nav('/');
        }catch(err){
            console.log(err);
        }
    }
    return(
    <>
    <div align="center">
        <h1>Student Edit {id}</h1>
        <form onSubmit={handleSubmit} >
        Name: <input type="text" name="name" value={formsData.name} onChange={handleChange}/> <br/>
        Roll No.:<input type="number" name="rollno" value={formsData.rollno} onChange={handleChange}/> <br/>
        Subject:<input type="text" name="course" value={formsData.course} onChange={handleChange}/> <br/>
        Email:<input type="email" name="email" value={formsData.email} onChange={handleChange}/> <br/>
        Mobile No.:<input type="text" name="mobileno" value={formsData.mobileno} onChange={handleChange}/> <br/>
        <button type="submit">Update</button>
        </form>
        <button onClick={()=>nav('/')}>Cancel</button>
    </div>
    </>
    )
}