import React, {useState} from 'react';
import PropTypes from "prop-types";
import CustomSelectField from "../../../common/customSelectField.jsx";
import {MenuItem} from "@mui/material";
import ServiceTypesChart from "./serviceTypesChart.jsx";

const ServiceTypes = ({data, years}) => {
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const [selectedYear, setSelectedYear]=useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth]=useState(months[new Date().getMonth()]);
    const handleChangeYear = (event) => {
        setSelectedYear(event.target.value);
    };
    const handleChangeMonth = (event) => {
        setSelectedMonth(event.target.value);
    }


    return (
        <div className="bg-white px-5 pb-2.5 pt-6 rounded-2xl shadow-custom-sm">
            <div className='flex flex-wrap items-center gap-4 sm:ms-6'>
                <CustomSelectField label={'Année'} selectedValue={selectedYear.toString()}
                                   handleValueSelectChange={handleChangeYear} width={'sm:min-w-[110px]'}>
                    {years.map((year) => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                    ))}
                </CustomSelectField>
                <CustomSelectField label={'Mois'} selectedValue={selectedMonth.toString()}
                                   handleValueSelectChange={handleChangeMonth} width={'sm:min-w-[110px]'}>
                    {months.map((month) => (
                        <MenuItem key={month} value={month}>
                            {month}
                        </MenuItem>
                    ))}
                </CustomSelectField>
            </div>
            <ServiceTypesChart serviceUsageData={data} month={selectedMonth} year={selectedYear.toString()}/>

        </div>
    );
};

ServiceTypes.propTypes = {
    data: PropTypes.object.isRequired,
    years: PropTypes.array.isRequired,
};
export default ServiceTypes;
