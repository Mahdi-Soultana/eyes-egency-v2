import Document, { Html, Head, Main, NextScript } from "next/document";

//font-family: 'EB Garamond', serif;
// font-family: 'Open Sans', sans-serif;
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth ">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#30B2D2" />
        </Head>
        <body>
          <div id="fb-root"></div>
          <div id="model"></div>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;