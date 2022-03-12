import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header";
import Head from "next/head";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CssBaseline />
      <Header />
      <LocalizationProvider dateAdapter={DateAdapter}>
        {children}
      </LocalizationProvider>
    </>
  );
}
