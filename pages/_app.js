import { SessionProvider } from "next-auth/react";

import { SchoolContextProvider } from "../context/schoolContext";
import { UserContextProvider } from "../context/userContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SchoolContextProvider>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </SchoolContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
