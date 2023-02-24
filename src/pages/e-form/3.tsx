import React, { useState, useEffect, useCallback } from "react";
import Form3 from "e-form/components/form-3";
import { addressData, fatca, policyData } from "pages/utils/infoData";
import ReactDOMServer from "react-dom/server";
import Layout from "containers/layouts";
import { base64convert, getImageBase64 } from "pages/utils/services";
import jsPDF from "jspdf";

const EForm3 = () => {
  const [loading, setLoading] = useState(false);
  async function callback() {
    const imageLoader = await Promise.all([
      getImageBase64(`${process.env.basePath}/images/logo.svg`),
      getImageBase64(`${process.env.basePath}/images/pdf.svg`),
    ]);
    const size = [1190.55, 1683.78];
    const template = ReactDOMServer.renderToString(
      <Layout logo={imageLoader[0]}>
        <Form3
          addressData={addressData}
          fatca={fatca}
          policyData={policyData}
          image={imageLoader[1]}
        />
      </Layout>
    );

    let font = (await base64convert(
      `${process.env.basePath}/font/FWDCircularVietTT-Book.ttf`
    )) as string;
    let fontBold = (await base64convert(
      `${process.env.basePath}/font/FWDCircularVietTT-Bold.ttf`
    )) as string;

    // kích thước pdf
    const pdf = new jsPDF("p", "px", size);
    pdf.addFileToVFS(
      "FWDCircularVietTT-Book.ttf",
      font.slice(font.indexOf(",") + 1)
    );

    pdf.addFileToVFS(
      "FWDCircularVietTT-Bold.ttf",
      fontBold.slice(fontBold.indexOf(",") + 1)
    );
    pdf.addFont("FWDCircularVietTT-Book.ttf", "FWD", "normal");
    pdf.addFont("FWDCircularVietTT-Bold.ttf", "FWD", "bold");
    pdf.setFont("FWD");
    pdf.html(template, {
      callback: function (doc) {
        let numberOfPages = doc.getNumberOfPages();
        // const dataLength = priceSearch.chartList?.[0]?.lsFundDetail?.length ?? 0;
        // let maxPage = Math.ceil(dataLength / 25) + 2;
        if (numberOfPages > 2) {
          doc.deletePage(numberOfPages);
        }
        doc.save("FWD-e-form");
        setLoading(false);
      },
      x: 0,
      y: 0,
    });
  }
  useEffect(() => {
    callback();
  }, []);

  return (
    <Form3 addressData={addressData} fatca={fatca} policyData={policyData} />
  );
};

export default EForm3;
