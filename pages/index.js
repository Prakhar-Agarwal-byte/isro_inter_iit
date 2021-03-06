import { Grid, Container } from "@mui/material";
import FileUpload from "../components/FileUpload";

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
						<FileUpload />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
