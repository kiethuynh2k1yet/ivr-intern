import { ImgContainer } from "./styled";
import Image from "next/image";

export default function Header() {
  return (
    <ImgContainer>
      <Image
        src={`${process.env.basePath}/images/logo.png`}
        alt="logo"
        width={102}
        height={51}
      />
    </ImgContainer>
  );
}
