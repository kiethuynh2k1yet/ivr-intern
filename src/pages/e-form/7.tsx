import React, { useState, useEffect, useCallback } from "react";
import ReactDOMServer from "react-dom/server";
import Layout from "containers/layouts";
import { base64convert, getImageBase64 } from "pages/utils/services";
import jsPDF from "jspdf";
import Form7 from "e-form/components/form-7";
import Form71 from "e-form/components/form-7-1";
import Form72 from "e-form/components/form-7-2";

import {
  healthQuestion,
  healthQuestion1,
  healthQuestion2,
} from "pages/utils/healthData";
import { headingForm6, contentForm6 } from "pages/utils/tableOrangeData";
import { headingForm5G, contentForm5G } from "pages/utils/tableGrayData";

export default function EForm7() {
  const [loading, setLoading] = useState(false);
  const path = "";
  async function callback() {
    const imageLoader = await Promise.all([
      getImageBase64(`${process.env.basePath}/images/logo.svg`),
      getImageBase64(`${process.env.basePath}/images/pdf.svg`),
    ]);

    const template = ReactDOMServer.renderToString(
      <>
        <Layout logo={imageLoader[0]} path={path}>
          <Form7
            headingForm6={headingForm6}
            contentForm6={contentForm6}
            headingForm5G={headingForm5G}
            contentForm5G={contentForm5G}
            healthQuestion={healthQuestion}
          />
        </Layout>
        <Layout logo={imageLoader[0]} path={path}>
          <Form71 healthQuestion1={healthQuestion1} />
        </Layout>
        <Layout logo={imageLoader[0]}>
          <Form72 healthQuestion2={healthQuestion2} image={imageLoader[1]} />
        </Layout>
      </>
    );

    let font = (await base64convert(
      `${process.env.basePath}/font/FWDCircularVietTT-Book.ttf`
    )) as string;
    let fontBold = (await base64convert(
      `${process.env.basePath}/font/FWDCircularVietTT-Bold.ttf`
    )) as string;

    // kích thước pdf
    const size = [1190, 1684];
    const pdf = new jsPDF("p", "px", size);
    pdf.addPage(size);

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
        // addFooters(pdf);

        // const dataLength = priceSearch.chartList?.[0]?.lsFundDetail?.length ?? 0;
        // let maxPage = Math.ceil(dataLength / 25) + 2;
        // if (numberOfPages > 2) {
        //   doc.deletePage(numberOfPages);
        // }
        for (var i = 1; i <= numberOfPages; i++) {
          pdf.setPage(i);

          pdf.text("0" + String(i), 1130, 1565, null, null);
        }

        doc.save("FWD-dieu-chinh-so-tien-bao-hiem-co-cau-hoi");
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
    <Form7
      headingForm6={headingForm6}
      contentForm6={contentForm6}
      headingForm5G={headingForm5G}
      contentForm5G={contentForm5G}
      healthQuestion={healthQuestion}
    />
  );
}
