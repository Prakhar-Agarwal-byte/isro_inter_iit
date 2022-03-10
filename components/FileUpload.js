import React from "react";
import Dropzone from "react-dropzone";
import { Grid, Box, Typography, Button } from "@mui/material";

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
                    Drag and drop some files here, or click to select files
                  </Typography>
                </div>
              </section>
            )}
          </Dropzone>
        </Box>
      </Grid>
      <Grid item>
        <Button size="large" variant="contained" component="label">
          Upload
        </Button>
      </Grid>
    </Grid>
  );
}

export default FileUpload;
