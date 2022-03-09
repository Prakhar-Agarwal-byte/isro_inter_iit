import React from "react";
import Dropzone from "react-dropzone";
import Submit from "../components/Submit";
import { Grid, Container, Box, Typography } from "@mui/material";

function FileUpload() {
  return (
    <Grid container direction="column" alignItems="center" spacing={5}>
      <Grid item>
        <Box
          sx={{
            padding: 5,
            border: 2,
            borderColor: "primary.main",
            borderStyle: "dashed",
            borderRadius: 2,
          }}
        >
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Typography variant="h5">
                    Drag 'n' drop some files here, or click to select files
                  </Typography>
                </div>
              </section>
            )}
          </Dropzone>
        </Box>
      </Grid>
      <Grid item>
        <Submit />
      </Grid>
    </Grid>
  );
}

export default FileUpload;
