import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import Submit from "../components/Submit";
import Header from "../components/Header";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Header />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Submit />
        </Grid>
      </Grid>
    </div>
  );
}
