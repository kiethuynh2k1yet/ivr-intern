import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { makeid } from "utils/middleware";
import { valuesIn } from "lodash";
// import {nextConfig} from "pages/middleware"

const EForm9 = () => {
  const router = useRouter();

  // var a = [1, 2, 3];
  // var b = String(a);
  // alert(b); // 1,2,3
  // alert(typeof(b));

  useEffect(() => {
    setTimeout(() => {
      module.exports = {
        reactStrictMode: true,
        async redirects() {
          return [
            {
              source: "/e-form/9",
              destination: "/e-form/9?id="+{makeid},
              permanent: false,
            },
          ];
        },
      };

      if(makeid)
      router.push('/e-form/9?id='+ Number(makeid(6)))
    }, 500);
  });

  // module.exports = {
  //   async redirects() {
  //       return [
  //           {
  //               source: '/ivrweb/e-form/9',
  //               destination: '/ivrweb/e-form/9',
  //               permanent: true,
  //           },
  //       ];
  //   },
  // };

  return <div>9</div>;
};

export default EForm9;
