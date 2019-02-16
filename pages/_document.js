import Document, { Head, Main, NextScript } from 'next/document'

export default class ZceDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main className="demo" />
          <NextScript />
        </body>
        <style jsx>{`
          html,
          body {
            height: 100%;
            margin: 0;
          }

          body {
            display: flex;
            flex-direction: column;
            text-align: center;
            background: #454d5d 50%;
            background-size: cover;
            justify-content: center;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            user-select: none;
          }
        `}</style>
      </html>
    )
  }
}