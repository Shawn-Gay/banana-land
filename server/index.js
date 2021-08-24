import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoute from './routes/post.js'

dotenv.config()

const app = express();


app.use('/posts', postRoute)


app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log('server runnin')))
.catch((err) => console.log(err))


mongoose.set('useFindAndModify', false)