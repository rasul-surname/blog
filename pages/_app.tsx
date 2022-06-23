import React from "react";
import { AppProps } from "../node_modules/next/app";

import Header from "../components/Header";

import "../styles/reset.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
