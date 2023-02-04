import Authentication from "components/authentication/authentication";
import OTP from "components/otp/OTP";
import Header from "components/header/header";
export default function Home() {
  return (
    <>
      <Header />
      {/* <Authentication /> */}
      <OTP />
    </>
  );
}
