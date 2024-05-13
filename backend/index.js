import express from "express"
import routes from "./routes.js"
import bodyparser from "body-parser"

const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

app.listen(4000,()=>{
    console.log("Server started");
})