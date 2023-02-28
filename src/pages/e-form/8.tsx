import React, { useState, useEffect, useCallback } from "react";
import ReactDOMServer from "react-dom/server";
import Layout from "containers/layouts";
import { base64convert, getImageBase64 } from "pages/utils/services";
import jsPDF from "jspdf";
import Form8 from "e-form/components/form-8";
import Form81 from "e-form/components/form-8-1";
import { headingForm7, contentForm7 } from "pages/utils/tableOrangeData";
import { headingForm5G, contentForm8G } from "pages/utils/tableGrayData";
export default function EForm8() {
  const [loading, setLoading] = useState(false);
  async function callback() {
    const imageLoader = await Promise.all([
      getImageBase64(`${process.env.basePath}/images/logo.svg`),
      getImageBase64(`${process.env.basePath}/images/pdf.svg`),
    ]);
    const path = "";
    const size = [1190, 1684.75];
    const template = ReactDOMServer.renderToString(
      <>
        <Layout logo={imageLoader[0]} path={path}>
          <Form8
            headingForm7={headingForm7}
            contentForm7={contentForm7}
            headingForm5G={headingForm5G}
            contentForm8G={contentForm8G}
            image={imageLoader[1]}
          />
        </Layout>
        <Layout logo={imageLoader[0]}>
          <Form81 />
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
    const pdf = new jsPDF("p", "px", size);

    // pdf.addPage(size);
    // pdf.setPage(2);

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

        for (var i = 1; i <= numberOfPages; i++) {
          pdf.setPage(i);
          
          pdf.text(
            "0" + String(i),
            1130,
            1565,
            null,
            null,
          );
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
    <Form8
      headingForm7={headingForm7}
      contentForm7={contentForm7}
      headingForm5G={headingForm5G}
      contentForm8G={contentForm8G}
    />
  );
}

