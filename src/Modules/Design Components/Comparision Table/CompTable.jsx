import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import SpeedIcon from '@mui/icons-material/Speed';
import TimerIcon from '@mui/icons-material/Timer';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import EvStationIcon from '@mui/icons-material/EvStation';
import VerifiedIcon from '@mui/icons-material/Verified';
import FireIcon from '@mui/icons-material/LocalFireDepartment';
import RideIcon from '@mui/icons-material/DirectionsBike';
import SafetyIcon from '@mui/icons-material/Security';
import RangeIcon from '@mui/icons-material/LinearScale';
import './compTable.css';

const allSpecifications = [
    { name: 'Battery', icons: <BatteryChargingFullIcon className="spec-icon" />, values: ['1.8 kWh', '2.7 kWh', '2.7 kWh'] },
    { name: 'Battery Features', icons: <EvStationIcon className="spec-icon" />, values: ['LFP with 1500 cycles, Active Balancing, Waterproof (IP67)', 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)', 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)'] },
    { name: 'Battery Warranty', icons: <VerifiedIcon className="spec-icon" />, values: ['3 years', '3 years', '3 years'] },
    { name: 'Charging Time', icons: <TimerIcon className="spec-icon" />, values: ['3 hours (12A)', '4 hours (12A)', '4 hours (12A)'] },
    { name: 'Motor', icons: <ElectricBikeIcon className="spec-icon" />, values: ['1500W', '1500W', '2000W'] },
    { name: 'Max Speed', icons: <SpeedIcon className="spec-icon" />, values: ['55 km/h', '55 km/h', '65 km/h'] },
    { name: 'Warranty on Electronics', icons: <VerifiedIcon className="spec-icon" />, values: ['1 year', '1 year', '1 year'] },
    { name: 'Max Range (at 30 km/h)', icons: <SpeedIcon className="spec-icon" />, values: ['100 km', '150 km', '120 km'] },
    { name: 'Max Range (at 45 km/h)', icons: <SpeedIcon className="spec-icon" />, values: ['90 km', '110 km', '100 km'] },
    { name: 'Max Range (at Full Speed)', icons: <SpeedIcon className="spec-icon" />, values: ['60 km', '90 km', '80 km'] },
    { name: 'Fire-safe battery', icons: <FireIcon className="spec-icon" />, values: ['Yes', 'Yes', 'Yes'] },
    { name: 'Range prediction', icons: <RangeIcon className="spec-icon" />, values: ['Advanced', 'Advanced', 'Advanced'] },
    { name: 'Comfortable ride', icons: <RideIcon className="spec-icon" />, values: ['Very Comfortable', 'Very Comfortable', 'Very Comfortable'] },
    { name: 'Stable and safe', icons: <SafetyIcon className="spec-icon" />, values: ['Highly Stable', 'Highly Stable', 'Highly Stable'] },
];

const bikeModels = ['Rhyno SE03 Lite', 'Rhyno SE03', 'Rhyno SE03 Max'];

const ResponsiveTable = () => {
    const [numModels, setNumModels] = useState(2);
    const [selectedModels, setSelectedModels] = useState(bikeModels.slice(0, numModels));

    const handleNumModelsChange = (event) => {
        const value = event.target.value;
        setNumModels(value);
        setSelectedModels(bikeModels.slice(0, value));
    };

    const handleModelChange = (index, event) => {
        const newSelectedModels = [...selectedModels];
        newSelectedModels[index] = event.target.value;
        setSelectedModels(newSelectedModels);
    };

    return (
        <div className="comparison-container">
            <div className="dropdown-container container">
                <FormControl className="dropdown" variant="outlined">
                    <h5 id="num-models-label" className="dropdown-label">Number of Models</h5>
                    <Select
                        labelId="num-models-label"
                        value={numModels}
                        onChange={handleNumModelsChange}
                        label="Number of Models"
                        className="dropdown-select"
                    >
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>

                {selectedModels.map((model, index) => (
                    <FormControl key={index} className="dropdown" variant="outlined">
                        <h5 id={`model-label-${index}`} className="dropdown-label">Model {index + 1}</h5>
                        <Select
                            labelId={`model-label-${index}`}
                            value={model}
                            onChange={(event) => handleModelChange(index, event)}
                            label={`Model ${index + 1}`}
                            className="dropdown-select"
                        >
                            {bikeModels.map((modelName) => (
                                <MenuItem key={modelName} value={modelName}>
                                    {modelName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                ))}
            </div>
            <TableContainer component={Paper} className="table-container container">
                <Table className="spec-table">
                    <TableHead className="table-head">
                        <TableRow className="table-header-row">
                            <TableCell className="table-header-cell">
                                <h2>Specification</h2>
                            </TableCell>
                            {selectedModels.map((model, index) => (
                                <TableCell key={index} className="table-header-cell">
                                    <h2>{model}</h2>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody className="table-body">
                        {allSpecifications.map((spec, index) => (
                            <TableRow key={index} className="table-body-row">
                                <TableCell className="table-body-cell">
                                    <div className="spec-name-container">
                                        {spec.icons}
                                        <h4 className="spec-name ms-3">{spec.name}</h4>
                                    </div>
                                </TableCell>
                                {selectedModels.map((_, idx) => (
                                    <TableCell key={idx} className="table-body-cell">
                                        <h6>{spec.values[idx]}</h6>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ResponsiveTable;
