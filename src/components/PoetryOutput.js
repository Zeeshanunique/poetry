import React from "react";
import { Box, Typography, Button } from "@mui/material";

const PoetryOutput = ({ poem, downloadPoem }) => {
  const sharePoem = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Generated Poem',
          text: poem,
        });
        console.log('Poem shared successfully');
      } catch (error) {
        console.error('Error sharing poem:', error);
      }
    } else {
      console.log('Web Share API not supported in this browser');
    }
  };

  return (
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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={sharePoem}
            style={{ marginTop: "10px" }}
          >
            Share Poem
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PoetryOutput;
