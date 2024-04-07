import Usuario from '../models/Users.js'

// import bcrypt from 'bcryptjs'
// import jwt, { TokenExpiredError } from 'jsonwebtoken'

async function register(req,res){
    const errors = [];
    const newUsuario = new Usuario({
        Name: req.body.Name , 
        Surname: req.body.Surname, 
        Email: req.body.Email,
        Company: req.body.Company,
        Country: req.body.Country, 
        Pass: req.body.Pass,
        Pass2: req.body.Pass2})

    if(newUsuario.Pass != newUsuario.Pass2){
      errors.push({text: 'Passwords do not march'})
      console.log("las constraseñas no coinciden")
    }

    
    if (newUsuario.Pass.length < 4 ) {
      errors.push({text:'Passwords must be at least 4 characters'})
      console.log("al menos 4 letras en al contraseña")
    }

    if(!newUsuario.Name || !newUsuario.Surname || !newUsuario.Pass){
      return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
    }

    const emailUser = await Usuario.findOne({Email: newUsuario.Email})
    if (emailUser){
      res.status(400).send({status:"Error",message:"Email ya registrado"})
      console.log(newUsuario.Email)
    }
    
    else{
      newUsuario.save();
      console.log(newUsuario)
      return res.status(201).json({ status: "Success", message: "Usuario registrado correctamente", redirect: "/login" })
    }
}

async function login (req ,res){
  const newUsuario = new Usuario({
    Email: req.body.Email,
    Pass: req.body.Pass})
    const emailUserDb = await Usuario.findOne({Email: newUsuario.Email})
    const passUserDb = await Usuario.findOne({Pass:newUsuario.Pass})

    //tiene que existir por lo menos 1 opcion

    if (emailUserDb && passUserDb && newUsuario.Email==emailUserDb.Email && newUsuario.Pass == passUserDb.Pass){
      console.log("user loged with: " + newUsuario.Email )
      return res.status(201).json({ status: "logeado", message: "Usuario registrado correctamente", redirect: "/" })
    }else{
      res.status(400).send({status:"Error",message:"EROOR EN LA AUTENTICACION"})
    }

}

export const methods = {
    register,
    login,
  }

/////TERMINAR DE PODER REDIRIJIR ! 


