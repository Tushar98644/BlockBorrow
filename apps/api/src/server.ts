import express from "express";
import cors from 'cors'
import 'dotenv/config'
import helmet from "helmet";
import morgan from 'morgan'

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(cors({
    origin: "*"
}));

app.get('/',(req,res)=>{
    res.send("Hello from the server!");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> {
    console.log(`The server is running on port:${PORT}`);
})
