import { useTranslations } from "next-intl";
import Image from "next/image";

//Assets
import bdbLogo from "../../../../../public/assets/logos/BdBLogo.png";
import chronosPayLogo from "../../../../../public/assets/logos/chronosPayLogo.png"
import finguruLogo from "../../../../../public/assets/logos/finguruLogo.png"

//Styles
import "./partnerships.css"

function Partnerships() {

    const partnerships = useTranslations('partnerships');

  return (<section className="partnershipsSection">
  <h3>{partnerships('title')}</h3>
  <div className="partnershipsContainer">
      <Image className = "partner" src={bdbLogo} alt = "Banco de Bosques"/>
      <Image className = "partner" src={chronosPayLogo} alt = "Chronos Pay"/>
      <Image className = "partner" src={finguruLogo} alt = "Finguru"/>
      
  </div>
</section>
  );
}

export default Partnerships;
