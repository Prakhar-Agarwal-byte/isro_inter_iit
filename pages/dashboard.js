import React from "react";
import PropertyCard from "../components/PropertyCard";
import DLineChart from "../components/DLineChart";
import { Grid, Container } from "@mui/material";
import Chart from "../components/Chart";

function Dashboard() {
	return (
		<Container>
			<Grid
				container
				spacing={2}
				justifyContent="center"
				alignItems="center"
			>
				<Grid item xs={3}>
					<PropertyCard
						title="Rise Time"
						data="10.3"
						color="primary.light"
					/>
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
					<PropertyCard
						title="Total Flux"
						data="13.0"
						color="error.light"
					/>
				</Grid>
				<Grid item xs={12}>
					<Chart fileName="lcFile.csv" />
				</Grid>
			</Grid>
		</Container>
	);
}

export default Dashboard;
