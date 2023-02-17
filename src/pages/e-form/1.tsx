import Form1 from "e-form/components/form-1";
import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import {
  fatca,
  infoData,
  documentData,
  jobData,
  contactData,
  policyData,
} from "infoData";
import jsPDF from "jspdf";
// function getImageBase64(url: string, ratio = 1) {
//   return new Promise((resolve, reject) => {
//     var c = document.createElement("canvas");
//     var ctx = c.getContext("2d");
//     var img = new Image();
//     img.src = url;
//     img.onload = function (e) {
//       c.width = img.naturalWidth * ratio;
//       c.height = img.naturalHeight * ratio;
//       ctx.drawImage(img, 0, 0, c.width, c.height);
//       var base64String = c.toDataURL();
//       resolve(base64String);
//     };
//   });
// }
// function base64convert(url: any) {
//   return new Promise((resolve) => {
//     fetch(url)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           resolve(e.target.result);
//         };
//         reader.readAsDataURL(blob);
//       });
//   });
// }
const EForm1 = () => {
  // const [loading, setLoading] = useState(false);
  // async function callback() {
  //   const imageLoader = await Promise.all([
  //     getImageBase64(`${process.env.basePath}/images/logo.svg`),
  //     // service.getImageBase64(`${process.env.basePath}/images/banner.jpg`),
  //   ]);
  //   const size = [1190.55, 1683.78];
  //   const imageLogo = imageLoader[0];
  //   // const imageBanner = imageLoader[1];
  //   const template = ReactDOMServer.renderToString(
  //     <Form1
  //       infoData={infoData}
  //       fatca={fatca}
  //       documentData={documentData}
  //       policyData={policyData}
  //       jobData={jobData}
  //       contactData={contactData}
  //     />
  //   );

  //   let font = (await base64convert(
  //     `${process.env.basePath}/font/FWDCircularVietTT-Book.ttf`
  //   )) as string;
  //   let fontBold = (await base64convert(
  //     `${process.env.basePath}/font/FWDCircularVietTT-Bold.ttf`
  //   )) as string;
  //   const pdf = new jsPDF("p", "px", size);
  //   pdf.addFileToVFS(
  //     "FWDCircularVietTT-Book.ttf",
  //     font.slice(font.indexOf(",") + 1)
  //   );
  //   pdf.addFileToVFS(
  //     "FWDCircularVietTT-Bold.ttf",
  //     fontBold.slice(fontBold.indexOf(",") + 1)
  //   );

  //   pdf.addFont("FWDCircularVietTT-Book.ttf", "FWD", "normal");
  //   pdf.addFont("FWDCircularVietTT-Bold.ttf", "FWD", "bold");

  //   pdf.setFont("FWD");

  //   pdf.html(template, {
  //     callback: function (doc) {
  //       let numberOfPages = doc.getNumberOfPages();
  //       // const dataLength = priceSearch.chartList?.[0]?.lsFundDetail?.length ?? 0;
  //       // let maxPage = Math.ceil(dataLength / 25) + 2;
  //       if (numberOfPages > 2) {
  //         doc.deletePage(numberOfPages);
  //       }
  //       doc.save("FWD-gia-tri-quy-lien-ket-don-vi");
  //       setLoading(false);
  //     },
  //     x: 0,
  //     y: 0,
  //   });
  // }
  // useEffect(() => {
  //   callback();
  // }, []);
  return (
    <Form1
      infoData={infoData}
      fatca={fatca}
      documentData={documentData}
      policyData={policyData}
      jobData={jobData}
      contactData={contactData}
    />
  );
};

export default EForm1;
