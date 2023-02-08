import { ImgHeader } from "./styles";
import Image from "next/image";

export default function Header() {
  return (
    <ImgHeader>
      <Image
        src={`${process.env.basePath}/images/logo.png`}
        alt="logo"
        width={102}
        height={51}
      />
    </ImgHeader>
  );
}