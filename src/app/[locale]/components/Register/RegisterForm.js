//Assets
"use client";
import logoOxygen from "../../../../../public/assets/images/logo.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import "./register.css";
import { useState } from "react";

const LoginForm = () => {
  const loginIdioms = useTranslations("Login");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [company, setCompany] = useState("");
  const [pais, setPais] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };
  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };
  const handlePaisChange = (e) => {
    setPais(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let datosUsuario = {Name : nombre , Surname : apellido , Company : company , Country : pais , Pass : password, Pass2 : password2,  Email : email}
    let datosUsuarioJson = JSON.stringify(datosUsuario);

    console.log(datosUsuarioJson)
    // Aquí puedes agregar la lógica para enviar la solicitud de inicio de sesión con los datos ingresados
    
    const res = await fetch("https://web-oxygen-backend.onrender.com/api/register", {     
      method: 'POST',
          headers:
          {
          'Content-Type': 'application/json' 
          },
          body: datosUsuarioJson
      })
      const resJson = await res.json();
      if(resJson.redirect){
          window.location.href = resJson.redirect;
        }
    
  };

  return (
    <>
      <div className="loginForm">
        <Image src={logoOxygen} alt="logo" className="loginFormImg" />
        <h3>{loginIdioms("register-form-title")}</h3>
        <form onSubmit={handleSubmit}>
          <div className="formField">
            <label htmlFor="nombre">{loginIdioms("nombre-field")}</label>
            <input
              type="nombre"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
              required
            />
          </div>
          <div className="formField">
            <label htmlFor="apellido">{loginIdioms("apellido-field")}</label>
            <input
              type="apellido"
              id="apellido"
              value={apellido}
              onChange={handleApellidoChange}
            />
          </div>
          <div className="formField">
            <label htmlFor="pais">{loginIdioms("pais-field")}</label>
            <input
              type="pais"
              id="pais"
              value={pais}
              onChange={handlePaisChange}
            />
          </div>
          <div className="formField">
            <label htmlFor="company">{loginIdioms("company-field")}</label>
            <input
              type="company"
              id="company"
              value={company}
              onChange={handleCompanyChange}
            />
          </div>
          <div className="formField">
            <label htmlFor="password">{loginIdioms("password-field")}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="formField">
            <label htmlFor="password2">{loginIdioms("password2-field")}</label>
            <input
              type="password2"
              id="password2"
              value={password2}
              onChange={handlePassword2Change}
            />
          </div>
          <div className="formField">
            <label htmlFor="email">{loginIdioms("email-field")}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button className="submitBtn" type="submit">
            {loginIdioms("register-btn")}
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
