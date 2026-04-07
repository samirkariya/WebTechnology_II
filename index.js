const express = require("express")
const cors = require("cors")
const apiKeyAuth = require("./middleware")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
 res.send("Public API - No API Key Required")
})

app.get("/products", apiKeyAuth , (req,res)=>{
 res.json([
  {id:1,name:"Laptop"},
  {id:2,name:"Mobile"},
  {id:3,name:"Keyboard"}
 ])

})

app.listen(5000,()=>{
 console.log("Server running on port 5000")
})