import React from "react";
import Button from "@mui/material/Button";

function Submit() {
  return (
    <div>
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden />
      </Button>
    </div>
  );
}

export default Submit;
