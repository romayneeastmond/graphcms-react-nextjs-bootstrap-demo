import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' />
                    <Script src='https://code.jquery.com/jquery-3.3.1.min.js'></Script>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

                <Script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'></Script>
                <Script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></Script>
            </Html>
        )
    }
}

export default MyDocument