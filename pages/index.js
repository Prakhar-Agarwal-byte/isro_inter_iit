import Submit from "../components/Submit";
import { Grid, Container } from "@mui/material";
import PropertyCard from "../components/PropertyCard";
import MainChart from "../components/MainChart";

export default function Home() {
  return (
    <div>
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={3}>
            <PropertyCard title="Rise Time" data="10.3" color="primary.light" />
          </Grid>
          <Grid item xs={3}>
            <PropertyCard
              title="Decay Constant"
              data="11.2"
              color="primary.main"
            />
          </Grid>
          <Grid item xs={3}>
            <PropertyCard
              title="Total Burst Time"
              data="12.1"
              color="warning.light"
            />
          </Grid>
          <Grid item xs={3}>
            <PropertyCard title="Total Flux" data="13.0" color="error.light" />
          </Grid>
          <Grid item xs={12}>
            <MainChart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
