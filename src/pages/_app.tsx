import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { Fragment } from "react";
import "../styles/global.css";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

nProgress.configure({ showSpinner: false });

const App = (props: any) => {
  const { Component, pageProps } = props;
  const Layout = Component?.Layout || Fragment;

  return (
    <>
      <Head>
        <title>Opacity Studio</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
