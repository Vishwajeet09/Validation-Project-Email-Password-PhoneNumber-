import express from 'express'
import {join} from 'path'
import web from "./routes/web.js"
import connectDB from "./db/connectdb.js";


const app = express()
const port = '4000'
const DATABASE_URI = "mongodb://127.0.0.1:27017/Userdb"



// Middleware use in createDoc:
app.use(express.urlencoded({ extended: true }))

// Set Static Files:
app.use('/',express.static(join(process.cwd(), "Public")))

// Set Template Engine:
app.set('view engine', 'ejs')


// Set Router Path:
app.use('/', web)


// Database Connection:
connectDB(DATABASE_URI);

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})