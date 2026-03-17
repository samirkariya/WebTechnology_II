const VALID_API_KEY = "123456789"
const apiKeyAuth = (req,res,next)=>{
    const apiKey = req.headers["api-key"]
    console.log("Received API Key:",apiKey)

    if(!apiKey){
        return res.status(401).json({message:"API Key missing"})
    }
    if(apiKey !== VALID_API_KEY){
        return res.status(403).json({message:"Invalid API Key"})
    }
    next()
}
module.exports = apiKeyAuth