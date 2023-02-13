// const Home = () => {
//   const isLogin = true;
//   return <div>Hello world</div>;
// };

// export default Home;
import Header from "components/header";
import Authentication from "components/authentication";
import React from "react";
import Otp from "components/otp";
import Receive from "components/receive";
import LinkSuccess from "components/linkSuccess";
import InfoCard from "e-form/components/infocard/index";
export default function Home() {
  return (
    <>
      {/* <Header/> */}
      {/* <Authentication/>  */}
      {/* <Otp/> */}
      {/* <Receive/> */}
      {/* <LinkSuccess/> */}
      <InfoCard />
    </>
  );
}
