import express from "express"
const routes = express.Router();

routes.get("/",(req,res)=>{
    res.json({success:"true"});
})

export default routes;