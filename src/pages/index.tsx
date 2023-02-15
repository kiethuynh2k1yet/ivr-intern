// const Home = () => {
//   const isLogin = true;
//   return <div>Hello world</div>;
// };

// export default Home;
import React from "react";
import Otp from "components/otp";
import Receive from "components/receive";
import LinkSuccess from "components/linkSuccess";
import InfoCard from "e-form/components/info-card/index";
import NoteForm from "e-form/components/note";
import Contract from "e-form/components/contract";
export default function Home() {
  return (
    <>
      {/* <Header/> */}
      {/* <Authentication/>  */}
      {/* <Otp/> */}
      {/* <Receive/> */}
      {/* <LinkSuccess/> */}
      {/* <InfoCard /> */}
      <Contract />
    </>
  );
}
