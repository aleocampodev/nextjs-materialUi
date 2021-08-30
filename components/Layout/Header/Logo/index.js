import Image from "next/image";
import logoFincaRaiz from "../../../../public/logoFincaRaiz.png";

const Logo = ({ description }) => {
  return (
    <div>
      <Image src={logoFincaRaiz} alt={description} width={120} height={30} />
    </div>
  );
};

export default Logo;
