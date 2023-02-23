import Layouts from "containers/layouts";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
// import { rootAction } from "redux/reducers/root-reducer";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import { base64convert, getImageBase64 } from "pages/utils/services";
import Form1 from "e-form/components/form-1";
import {
  infoData,
  fatca,
  documentData,
  policyData,
  jobData,
  contactData,
} from "pages/utils/infoData";

interface ThemeWrapperProps {
  children: React.ReactNode;
  component: React.ReactNode;
}

const ThemeWrapper = ({ children, component }: ThemeWrapperProps) => {
  const router = useRouter();
  const dispath = useDispatch();
  const [loading, setLoading] = useState(false);
  const Layout = useMemo(() => {
    if (router.pathname.includes("/e-form")) return Layouts; // custom layout here
    return Fragment;
  }, [router.pathname]);

  // useEffect(() => {
  //   dispath(rootAction.setInitialized(true));
  //   const listenter = function (ev: MouseEvent) {
  //     const button = ev.target as HTMLButtonElement;
  //     if (button.tagName === "BUTTON" && !button.disabled) {
  //       const clickable = button.dataset.clickable;
  //       if (clickable === "false") {
  //         ev.preventDefault();
  //         ev.stopPropagation();
  //         return;
  //       }
  //       button.dataset.clickable = "false";
  //       button.style.pointerEvents = "none";
  //       setTimeout(() => {
  //         button.dataset.clickable = "true";
  //         button.style.pointerEvents = "";
  //       }, 300);
  //     }
  //   };
  //   document.addEventListener("click", listenter);
  //   return () => {
  //     document.removeEventListener("click", listenter);
  //   };
  // }, [dispath]);
  async function callback() {
    const imageLoader = await Promise.all([
      getImageBase64(`${process.env.basePath}/images/logo.svg`),
      getImageBase64(`${process.env.basePath}/images/pdf.svg`),
    ]);
    const size = [1190.55, 1683.78];
    const template = ReactDOMServer.renderToString(
      <Layout logo={imageLoader[0]}>
        <Form1
          infoData={infoData}
          fatca={fatca}
          documentData={documentData}
          policyData={policyData}
          jobData={jobData}
          contactData={contactData}
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

    // const imgData =  `${process.env.basePath}/images/logo.png`;
    // kích thước pdf
    const pdf = new jsPDF("p", "px", size);
    pdf.addImage(imageLoader[0], 'SVG', 0 , 0, 500, 500);
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
    <ThemeProvider theme={LightTheme}>
      <Head>
        <link rel="icon" href={`${process.env.basePath}/favicon.ico`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={LightTheme.color.text.body} />
        <meta name="description" content="Customer portal" />

        <title>Intern</title>
      </Head>
      {children}
      <Layout>{component}</Layout>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
