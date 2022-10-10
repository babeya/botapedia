import React from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import ThermostatIcon from "@mui/icons-material/Thermostat";

const MIN_TEMPERATURE = -10;
const MAX_TEMPERATURE = 50;

type Props = {
  plant: Queries.Plant;
};

type TemperatureSliderProps = {
  temperatures: number[];
  color: "error" | "success" | "info";
  label: React.ReactNode;
};

const valueLabelFormat = (value: number) => `${value}°C`;

const TemperatureSlider = ({
  temperatures,
  color,
  label,
}: TemperatureSliderProps) => {
  if (!temperatures.length) {
    return null;
  }

  return (
    <Box marginY={1}>
      <Typography textAlign="center" variant="caption" component="div">
        {label}
      </Typography>
      <Slider
        aria-label="Temperature"
        value={temperatures}
        getAriaValueText={() => `${temperatures[0]}°C`}
        sx={{ pointerEvents: "none" }}
        valueLabelDisplay="off"
        color={color}
        min={MIN_TEMPERATURE}
        max={MAX_TEMPERATURE}
        marks={[
          { value: MIN_TEMPERATURE, label: valueLabelFormat(MIN_TEMPERATURE) },
          ...temperatures.map((value) => ({
            value,
            label: valueLabelFormat(value),
          })),
          { value: MAX_TEMPERATURE, label: valueLabelFormat(MAX_TEMPERATURE) },
        ]}
      />
    </Box>
  );
};

const TemperatureGauges = ({ plant: { temperatures } }: Props) => {
  return (
    <Box sx={{ flex: 1 }} paddingX={3}>
      <Typography
        variant="h6"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        marginTop={1}
      >
        <ThermostatIcon /> Températures de croissance
      </Typography>

      <TemperatureSlider
        label="Minimales"
        temperatures={(temperatures?.min || []) as number[]}
        color="info"
      />
      <TemperatureSlider
        label="Optimales"
        temperatures={(temperatures?.grow || []) as number[]}
        color="success"
      />
      <TemperatureSlider
        label="Maximales"
        temperatures={(temperatures?.max || []) as number[]}
        color="error"
      />
    </Box>
  );
};

export default TemperatureGauges;
