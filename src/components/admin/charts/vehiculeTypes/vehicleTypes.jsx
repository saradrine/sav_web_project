import React from 'react';
import CustomSelectField from "../../../common/customSelectField.jsx";
import {MenuItem} from "@mui/material";
import ServiceUsageChart from "../serviceUsage/serviceUsageChart.jsx";
import VehicleTypesChart from "./vehicleTypesChart.jsx";
const vehicleTypes = [
    {
        type: 'Voiture',
        nombre: 20
    },
    {
        type: 'Moto',
        nombre: 15
    },
    {
        type: 'Camion',
        nombre: 10
    },
    {
        type: 'Bus',
        nombre: 5
    },
    {
        type: 'Tracteur',
        nombre: 3
    },
    {
        type: 'Vélo',
        nombre: 2
    },
    {
        type: 'Autre',
        nombre: 5
    }
];

const VehicleTypes = () => {
    return (
        <div className="bg-white px-5 pb-2.5 pt-6 rounded-2xl shadow-custom-sm">
            <VehicleTypesChart vehicleTypes={vehicleTypes} />
        </div>

    );
};

export default VehicleTypes;