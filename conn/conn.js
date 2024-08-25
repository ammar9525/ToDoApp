const mongoose = require("mongoose");

const conn =async(req, res) => {
try {
    

        await mongoose.connect ("mongodb+srv://user:ammar@cluster0.5gbcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    
            console.log("connected")
        });

        
    
    } catch (error) {

    res.status(400).json({
        message:"Not connected",
    });
    
}
}
conn();