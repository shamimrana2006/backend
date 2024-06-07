import express from "express";
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.json({
        name: "shamim",
        roll: 670778
    })
})
export default app