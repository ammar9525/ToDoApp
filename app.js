const express = require ("express");
const app = express();
const cors =require("cors")
require("./conn/conn")
const auth =require("./routes/auth");
const list =require("./routes/list");
app.use(express.json());
app.use(cors())

app.use(cors({
    origin: ["https://deploy-mern-1whq.vercel.app"], // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
  }));

  
app.get("/",(req,res) => {
    res.send("hello");
});


app.use("/api/v1",auth);
app.use("/api/v2",list);


app.listen(1000, () => {
    console.log("Server Started")
});