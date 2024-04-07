"use client";
import { useTranslations } from "next-intl";

//Components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import RegisterForm from "../components/Login/LoginForm";


//FORMULARIo REGISTER

//Styles
import "../../../styles/login.css";

const Register = () => {
  const loginIdioms = useTranslations("Login");
  return (
    <>
      <Navbar />
      <section className="login">
        <h1>{loginIdioms("login-title")}</h1>
        <div className="loginFormContainer">
          <RegisterForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
