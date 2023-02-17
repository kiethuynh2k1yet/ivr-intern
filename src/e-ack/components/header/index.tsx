import { ImgHeader } from "./styles";
import Image from "next/image";

export default function Header() {
  const logo: string = require("../../../../public/images/logo.svg").default;
  return (
    <ImgHeader>
      <Image
        src={logo}
        alt="logo"
        width={102}
        height={51}
      />
    </ImgHeader>
  );
}