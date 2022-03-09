import Submit from "../components/Submit";
import { Grid, Container } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
}
