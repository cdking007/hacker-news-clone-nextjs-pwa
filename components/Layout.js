import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <div className="container">
        <nav>
          <Link href="/">
            <a>
              <span className="main-title">Hacker Next</span>
            </a>
          </Link>
        </nav>

        {children}
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: #f6f6ef;
        }
        nav {
          background: #f60;
          padding: 1em;
        }

        nav > * {
          display: inline-block;
          color: black;
        }
        nav a {
          text-decoration: none;
        }
        nav .main-title {
          font-weight: bold;
        }
      `}</style>

      <style global jsx>
        {`
          body {
            background: white;
            font-family: sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
