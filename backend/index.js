import express from "express"
import routes from "./routes.js"
import bodyparser from "body-parser"
import connectDB from "./database.js"
import {config} from "dotenv"
import cors from "cors"


const app = express();

app.use(cors());

config({path:"./.env"})

connectDB();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

app.listen(4000,()=>{
    console.log("Server started");
})