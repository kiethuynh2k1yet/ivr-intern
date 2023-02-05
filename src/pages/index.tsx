import Authentication from "components/authentication/authentication";
import OTP from "components/otp/OTP";
import Header from "components/header/header";
import Delivery from "components/delivery/delivery";
import Checkout from "components/checkout/checkout";
// import Gift from "components/gift/gift";
export default function Home() {
  return (
    <>
      <Header />
      {/* <Authentication /> */}
      {/* <Gift /> */}
      {/* <Delivery /> */}
      <Checkout />
    </>
  );
}
