import { HeaderStepper, ImgContainer } from "./styled";
import Image from "next/image";
import { useRouter } from "next/router";
import Stepper from "components/stepper/stepper";
import { data } from "data";
interface GiftProps {
  product: object;
}
export default function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <HeaderStepper>
      <ImgContainer>
        <Image
          src={`${process.env.basePath}/images/logo.svg`}
          alt="logo"
          width={102}
          height={51}
        />
      </ImgContainer>

      {pathname === `/auth` ? (
        ""
      ) : pathname === `/otp` ? (
        ""
      ) : pathname === `/success` ? (
        ""
      ) : (
        <Stepper
          step={pathname === "/gift" ? 1 : pathname === "/gift/[id]" ? 2 : 3}
        />
      )}
    </HeaderStepper>
  );
}
