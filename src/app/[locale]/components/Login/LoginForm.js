//Assets

//REGISTER

"use client";
import logoOxygen from "../../../../../public/assets/images/logo.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import "./login.css";
import { useState } from "react";

const RegisterForm = () => {
  const loginIdioms = useTranslations("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let datosUsuario = {Pass : password,  Email : email}
    let datosUsuarioJson = JSON.stringify(datosUsuario);

    console.log(datosUsuarioJson)  
    const res = await fetch("https://web-oxygen-backend.onrender.com/login", {     
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
        <h3>{loginIdioms("login-form-title")}</h3>
        <form onSubmit={handleSubmit}>
         
          <div className="formField">
            <label htmlFor="email">{loginIdioms("email-field")}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
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

          <button className="submitBtn" type="submit">
            {loginIdioms("login-btn")}
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
