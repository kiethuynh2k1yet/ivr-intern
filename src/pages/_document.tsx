import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  // styled component
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => {
            return function CollectStyles(props: any) {
              return sheet.collectStyles(<App {...props} />);
            };
          },
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:; child-src self blob:;"
          />
          <link rel="manifest" href={`${process.env.basePath}/manifest.json`} />

          <link
            rel="preload"
            href={`${process.env.basePath}/font/FWDCircularVietTT-Medium.ttf`}
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href={`${process.env.basePath}/font/FWDCircularVietTT-Book.ttf`}
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href={`${process.env.basePath}/font/FWDCircularVietTT-Black.ttf`}
            as="font"
            crossOrigin=""
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                `@font-face{font-family:"FWD";src:url("${process.env.basePath}/font/FWDCircularVietTT-Book.ttf");src: url("${process.env.basePath}/font/FWDCircularVietTT-Book.ttf") format("truetype"), url("${process.env.basePath}/font/FWDCircularVietTT-Book.eot"), url("${process.env.basePath}/font/FWDCircularVietTT-Book.eot?#iefix") format("embedded-opentype");font-weight:400;font-display:swap;}` +
                `@font-face{font-family:"FWD";src:url("${process.env.basePath}/font/FWDCircularVietTT-Medium.ttf");src: url("${process.env.basePath}/font/FWDCircularVietTT-Medium.ttf") format("truetype"), url("${process.env.basePath}/font/FWDCircularVietTT-Medium.eot"), url("${process.env.basePath}/font/FWDCircularVietTT-Medium.eot?#iefix") format("embedded-opentype");font-weight:500;font-display:swap;}` +
                `@font-face{font-family:"FWD";src:url("${process.env.basePath}/font/FWDCircularVietTT-Black.ttf");src: url("${process.env.basePath}/font/FWDCircularVietTT-Black.ttf") format("truetype"), url("${process.env.basePath}/font/FWDCircularVietTT-Black.eot"), url("${process.env.basePath}/font/FWDCircularVietTT-Black.eot?#iefix") format("embedded-opentype");font-weight:700;font-display:swap;}`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
