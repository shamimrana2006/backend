import express from "express";
const app = express()
const port = 3000

import cors from "cors"

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    res.json({
        name: "shamim",
        roll: 670778
    })
})

export default app