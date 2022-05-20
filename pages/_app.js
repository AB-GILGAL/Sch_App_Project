import { SessionProvider } from "next-auth/react";

import { SchoolContextProvider } from "../context/schoolContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SchoolContextProvider>
        <Component {...pageProps} />
      </SchoolContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
