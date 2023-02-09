import { ImgContainer, Container, Logo } from "./styled";
import Image from "next/image";
import { useRouter } from "next/router";
import Stepper from "components/stepper/stepper";
import { data } from "data";
interface GiftProps {
  product: object;
}
export default function Header({ product }: { product: GiftProps }) {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(product);
  return (
    <Container>
      <ImgContainer>
        <Logo>
          <Image
            src={`${process.env.basePath}/images/logo.png`}
            alt="logo"
            width={102}
            height={51}
          />
        </Logo>
      </ImgContainer>
      {pathname === `/auth` && `/otp` && `/success` && `/notification` ? (
        <Stepper />
      ) : (
        ""
      )}
    </Container>
  );
}
