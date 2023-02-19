import Layouts from "containers/layouts";
import LayoutEarks from "components/Layouts";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { rootAction } from "redux/reducers/root-reducer";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "styles/theme";
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import Header from "e-form/components/header";
import Info from "e-form/components/info";
interface ThemeWrapperProps {
  children: React.ReactNode;
  component: React.ReactNode;
}
// load the image.
// function load image ra base64 = canvas
function getImageBase64(url: string, ratio = 1) {
  return new Promise((resolve, reject) => {
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    // source hình
    img.src = url;
    img.onload = function (e) {
      c.width = img.naturalWidth * ratio;
      c.height = img.naturalHeight * ratio;
      ctx.drawImage(img, 0, 0, c.width, c.height);
      var base64String = c.toDataURL();
      resolve(base64String);
    };
  });
}

function base64convert(url: any) {
  return new Promise((resolve) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target.result);
        };
        reader.readAsDataURL(blob);
      });
  });
}
const ThemeWrapper = ({ children, component }: ThemeWrapperProps) => {
  const router = useRouter();
  const dispath = useDispatch();
  const Layout = useMemo(() => {
    if (router.pathname.includes("/e-form")) return Layouts; // custom layout here
    return Fragment;
  }, [router.pathname]);

  useEffect(() => {
    dispath(rootAction.setInitialized(true));
    const listenter = function (ev: MouseEvent) {
      const button = ev.target as HTMLButtonElement;
      if (button.tagName === "BUTTON" && !button.disabled) {
        const clickable = button.dataset.clickable;
        if (clickable === "false") {
          ev.preventDefault();
          ev.stopPropagation();
          return;
        }
        button.dataset.clickable = "false";
        button.style.pointerEvents = "none";
        setTimeout(() => {
          button.dataset.clickable = "true";
          button.style.pointerEvents = "";
        }, 300);
      }
    };
    document.addEventListener("click", listenter);
    return () => {
      document.removeEventListener("click", listenter);
    };
  }, [dispath]);
  const [loading, setLoading] = useState(false);
  async function callback() {
    const imageLoader = await Promise.all([
      getImageBase64(`${process.env.basePath}/images/logo.svg`),
      // service.getImageBase64(`${process.env.basePath}/images/banner.jpg`),
    ]);
    console.log(imageLoader);
    const size = [1190.55, 1683.78];
    const imageLogo = imageLoader[0];
    console.log(imageLogo);
    // const imageBanner = imageLoader[1];
    const template = ReactDOMServer.renderToString(
      <Layout>{component}</Layout>
    );
    let font = (await base64convert(
      `${process.env.basePath}/font/FWDCircularVietTT-Book.ttf`
    )) as string;
    let fontBold = (await base64convert(
      `${process.env.basePath}/font/FWDCircularVietTT-Bold.ttf`
    )) as string;

    const pdf = new jsPDF("p", "px", size);
    pdf.addFileToVFS(
      "FWDCircularVietTT-Book.ttf",
      font.slice(font.indexOf(",") + 1)
    );
    pdf.addFileToVFS(
      "FWDCircularVietTT-Bold.ttf",
      fontBold.slice(fontBold.indexOf(",") + 1)
    );
    // pdf.addImage(imageLogo.toString(), "png", 5, 5, 0, 0);
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
        doc.save("FWD-gia-tri-quy-lien-ket-don-vi");
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
