import React from "react";
import { Box, Typography, Button } from "@mui/material";

const PoetryOutput = ({ poem, downloadPoem }) => (
  <Box className="poetry-generator-output-container">
    {poem && (
      <Box className="poetry-generator-output show">
        <Typography variant="h5" gutterBottom align="center">
          Generated Poem:
        </Typography>
        <Typography variant="body1" component="pre" className="poem-text">
          {poem}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={downloadPoem}
          style={{ marginTop: "20px" }}
        >
          Download Poem
        </Button>
      </Box>
    )}
  </Box>
);

export default PoetryOutput;
