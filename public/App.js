import {useState} from "react"

export default function App(){
  const [data,setData] = useState([])
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products",{
      headers:{
        "api-key":"12345"
      }
    })
    if(res.status===200){
    const result = await res.json()
    setData(result)
    }
    else alert("Invalid key");
  }

return(
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h2>API Key Authentication Demo</h2>

      <button onClick={fetchProducts}>
          Get Products
      </button>
      <ul>
      {data && 
        data.map(item=>(
          <li key={item.id}>{item.name}</li>
        ))
      }
      </ul>
  </div>
 )
}