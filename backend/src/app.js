import express from 'express'
import cors from 'cors'
//rutas de la API
import AuthRoutes from './routes/auth.routes.js'



const app = express() //OBJETO DEL SERVIDOR

//SETTING
app.set('port' , process.env.PORT || 10000); //Si no hay otro puerto entonces ejecuta en el 3000

app.use(express.json());

app.use(express.text()); //for text common user complet

app.use(cors())

app.use("/api" , AuthRoutes); //for separete all mis pages with pre-API

app.use(express.static("public"))

export default app;










