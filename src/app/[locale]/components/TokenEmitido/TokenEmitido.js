import "./tokenemitido.css";
import "../MainPage/mainpage.css"
import Image from "next/image";
import { useTranslations } from "next-intl";


const TokenEmitido = ({ title, text, logo, link }) => {
  const services = useTranslations('Services');

  return (
    <>
      <div className="tokenCard">
        <Image src={logo} width={80} height={100} alt="logo" className="logoTokenCard" />
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="tokenCard-link">
          <a href={link} target="_blank" rel="noreferrer">{services('see-more-btn')} &gt;</a>
        </div>
      </div>
    </>
  );
};

export default TokenEmitido;
