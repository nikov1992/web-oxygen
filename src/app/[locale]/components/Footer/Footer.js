"use client"; 
import "./footer.css"
import Image from 'next/image';
import logoFooter from "../../../../../public/assets/images/logo.png"
import logoInstagram from "../../../../../public/assets/logos/logoInstagram.png"
import logoLinkedin from "../../../../../public/assets/logos/logoLinkedin.png"
import logoTwitter from "../../../../../public/assets/logos/logoTwitter.png";
import logoYoutube from "../../../../../public/assets/logos/logoYoutube.png"
import { useTranslations } from "next-intl";


function Footer() {

    const footIdioms = useTranslations('Footer');

  return (
    <section className="footer">
        <div className="footerSocials">
            <Image src={logoFooter} className="logoFooter" alt="logo Oxygen Footer"></Image>
            <div className="socialsContainer">
                <div className="social"><a href="https://instagram.com/oxygen.token" target="_blank" rel="noreferrer"><Image src={logoInstagram} className="socialLogo" alt="logo Instagram"></Image></a></div>
                <div className="social"><a href="http://www.linkedin.com/company/oxygentoken" target="_blank" rel="noreferrer"><Image src={logoLinkedin} className="socialLogo" alt="logo Linkedin"></Image></a></div>
                <div className="social"><a href="/" target="_blank" rel="noreferrer"><Image src={logoTwitter} className="socialLogo" alt="Logo Twitter"></Image></a></div>
                <div className="social"><a href="https://www.youtube.com/channel/UCKO07x_sPDCw8eXy34uwcgA" target="_blank" rel="noreferrer"><Image src={logoYoutube} className="socialLogo" alt="Logo Youtube"></Image></a></div>



            </div>
        </div>
        <div className="footerRedirects">
            <h3>{footIdioms('company')}</h3>
            <ul className="redirects">
                <li><a href="/nosotros">{footIdioms('us-link')}</a></li>
                <li><a href="/proyecto">{footIdioms('projects-link')}</a></li>
                <li><a href="/contacto">{footIdioms('contact-link')}</a></li>
                <li><a href="/joinus">Join Us</a></li>
            </ul>
        </div>
        <div className="footerNewsletter">
            <div>
            <h3>{footIdioms('news')}</h3>
            <input type="text" placeholder="Mail"></input>
            <button>{footIdioms('news-button')}</button>
            </div>
            <div className="upbutton">
            <a href="#home">Up ^</a></div>
        </div>

     


    </section>
  );
}

export default Footer;
