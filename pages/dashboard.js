import React from "react";
import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { Grid, Container, TextField } from "@mui/material";
import Chart from "../components/Chart";
import { DateTimePicker } from "@mui/lab";

function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [isDateSet, setIsDateSet] = useState(false);
  return (
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
          <DateTimePicker
            label="Date&Time picker"
            value={date}
            onChange={(newDate) => {
              setDate(newDate.toDate());
              setIsDateSet(true);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          {console.log(date.getTime())}
          {console.log(isDateSet)}
        </Grid>
        <Grid item xs={12}>
          <Chart
            maxTime={
              isDateSet ? date.getTime() + 10 * 60 * 100 : Number.MAX_VALUE
            }
            fileName="lcFile.csv"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
