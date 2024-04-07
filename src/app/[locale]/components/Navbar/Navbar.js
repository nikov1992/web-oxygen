"use client";
import "./navbar.css";
import { useState, useEffect } from "react";
import logoNav from "../../../../../public/assets/images/logo_slogan.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import globeLogo from "../../../../../public/assets/logos/globeLogo.png";
import logoArg from "../../../../../public/assets/logos/logoArg.png";
import logoUs from "../../../../../public/assets/logos/logoUs.png";

function Navbar(setFirstLoad) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navIdioms = useTranslations("Navbar");
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 650px)");

    //Actualiza el estado
    const handleMediaQueryChange = (event) => {
      setIsMobileView(event.matches);
    };

    handleMediaQueryChange(mobileMediaQuery); //Inicialmente
    mobileMediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <nav className="navigation">
      <Image src={logoNav} alt="Oxygen" className="brand-name" />

      {isMobileView ? (
        <li className="dropdown">
          <button className="dropbtn">
            <Image src={globeLogo} alt="logoMundo" className="globoImg" />
          </button>
          <div className="dropdown-content">
            <a href="/es">
              <Image
                src={logoArg}
                alt="bandera argentina"
                className="flagImg"
              />
            </a>
            <a href="/en">
              <Image src={logoUs} alt="bandera usa" className="flagImg" />
            </a>
          </div>
        </li>
      ) : (
        <></>
      )}
      <button
        className="navBarButton"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/nosotros">{navIdioms("us")}</a>
          </li>
          <li>
            <a href="/proyectos">{navIdioms("project")}</a>
          </li>
          <li>
            <a href="/registro">{navIdioms("registro")}</a>
          </li>
          <li>
            <a href="/login">{navIdioms("login")}</a>
          </li>
          <li>
            <a href="/comprar" className="linkComprar">
              {navIdioms("buy")}
            </a>
          </li>
          {!isNavExpanded ? (
            <li className="dropdown">
              <button className="dropbtn">
                <Image src={globeLogo} alt="logoMundo" className="globoImg" />
              </button>
              <div className="dropdown-content">
                <a href="/es">
                  <Image
                    src={logoArg}
                    alt="bandera argentina"
                    className="flagImg"
                  />
                </a>
                <a href="/en">
                  <Image src={logoUs} alt="bandera usa" className="flagImg" />
                </a>
              </div>
            </li>
          ) : (
            <div></div>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
