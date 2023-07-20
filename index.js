import  express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'


const app=express();



app.use(bodyParser.json({ limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}))
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL='mongodb+srv://ahmaadd7:ahmadahmad@cluster0.bzvgqet.mongodb.net/'
const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology : true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on:${PORT}`)))
.catch((error)=>console.log(error.message));


//mongoose.set('useFindAndModify',false);


