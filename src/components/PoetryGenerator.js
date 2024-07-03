import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Container, Paper } from "@mui/material";
import PoetryForm from "./PoetryForm";
import PoetryOutput from "./PoetryOutput";
import "./PoetryForm.css";
import { motion } from "framer-motion";
import "./base.css";

const PoetryGenerator = () => {
  const [poemType, setPoemType] = useState("Sonnet");
  const [city, setCity] = useState("Bergamo");
  const [pollutant, setPollutant] = useState("pm10");
  const [length, setLength] = useState(1);
  const [startDate, setStartDate] = useState(new Date(2022, 0, 1));
  const [endDate, setEndDate] = useState(new Date(2023, 11, 31));
  const [avgPollutionRate, setAvgPollutionRate] = useState(0);
  const [poem, setPoem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pollutionData, setPollutionData] = useState([]);

  const loadPollutionData = useCallback(async () => {
    let dataFile;
    if (city === "Bergamo" && pollutant === "pm10") {
      dataFile = "pollution_data_bergamopm10.json";
    } else if (city === "Bergamo" && pollutant === "pm2.5") {
      dataFile = "pollution_data_bergamopm25.json";
    } else if (city === "Treviglio" && pollutant === "pm10") {
      dataFile = "pollution_data_trevigliopm10.json";
    } else if (city === "Treviglio" && pollutant === "pm2.5") {
      dataFile = "pollution_data_trevigliopm25.json";
    }

    if (dataFile) {
      const data = await import(`../data/${dataFile}`);
      setPollutionData(data.default);
    }
  }, [city, pollutant]);

  useEffect(() => {
    loadPollutionData();
  }, [city, pollutant, loadPollutionData]);

  useEffect(() => {
    const calculateAvgPollutionRate = () => {
      if (pollutionData.length === 0) return;
      const startStr = startDate.toISOString().split("T")[0];
      const endStr = endDate.toISOString().split("T")[0];
      const filteredData = pollutionData.filter((entry) => {
        const entryDate = new Date(entry.date).toISOString().split("T")[0];
        return startStr <= entryDate && entryDate <= endStr;
      });
      const pollutionRates = filteredData.map((entry) =>
        parseFloat(entry.pollution_rate)
      );
      const avgRate = pollutionRates.length
        ? pollutionRates.reduce((a, b) => a + b, 0) / pollutionRates.length
        : 0;
      setAvgPollutionRate(avgRate);
    };
    calculateAvgPollutionRate();
  }, [startDate, endDate, pollutionData]);

  const generatePoetry = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://poetry-backend-7q2o.onrender.com/generate-poetry",
        {
          poemType,
          city,
          pollutant,
          length,
          avgPollutionRate,
          startDate: startDate.toISOString().split("T")[0],
          endDate: endDate.toISOString().split("T")[0]
        }
      );
      setPoem(response.data.poem);
    } catch (error) {
      console.error("Error generating poem:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadPoem = () => {
    const element = document.createElement("a");
    const file = new Blob([poem], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${city}_${startDate.toISOString().split("T")[0]}_${
      endDate.toISOString().split("T")[0]
    }.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Container disableGutters maxWidth={false} className="poetry-generator-container">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Paper elevation={3} className="poetry-generator-content">
      <PoetryForm
        poemType={poemType}
        setPoemType={setPoemType}
        city={city}
        setCity={setCity}
        pollutant={pollutant}
        setPollutant={setPollutant}
        length={length}
        setLength={setLength}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        avgPollutionRate={avgPollutionRate}
        generatePoetry={generatePoetry}
        isLoading={isLoading}
      />
      <PoetryOutput poem={poem} downloadPoem={downloadPoem} />
    </Paper>
  </motion.div>
</Container>

  );
};

export default PoetryGenerator;
