import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CssBaseline />
      {/* <Header /> */}
      <main>{children}</main>
    </>
  );
}
