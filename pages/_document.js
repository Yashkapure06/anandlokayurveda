/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/google-font-display */

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en-IN'>
        <Head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8"/>

          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

          <link href="assets/vendor/aos/aos.css" rel="stylesheet"/>
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
          <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
          <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
          <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
          <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>


          <link href="assets/css/style.css" rel="stylesheet"/>
          <link href="assets/css/contact.css" rel="stylesheet"/>
          <meta name="google-site-verification" content="x1t5o8GqzQ-VKMFCpsRZIAPLDyUdYVx0tWWDaumd9Y4" />
          <scrip src="https://code.jquery.com/jquery-1.12.4.min.js"/>
         
        </Head>
        <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P63W4M6" height="0" width="0"
          style={{"display:none;visibility":"hidden"}}></iframe></noscript>
            <Main />
            <NextScript />
              <script async src="assets/vendor/aos/aos.js"></script>
              <script async src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
              <script async src="assets/vendor/glightbox/js/glightbox.min.js"></script>
              <script async src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
              <script async src="assets/vendor/php-email-form/validate.js"></script>
              <script async src="assets/vendor/purecounter/purecounter.js"></script>
              <script async src="assets/vendor/swiper/swiper-bundle.min.js"></script>
              

            <script async src="assets/js/main.js"></script> 
        </body>
      </Html>
    )
  }
}

export default MyDocument;