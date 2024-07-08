import {useState} from 'react';
import { MenuItem } from '@mui/material';
import ServiceUsageChart from './serviceUsageChart.jsx';
import CustomSelectField from "../../../common/customSelectField.jsx";
import PropTypes from "prop-types";


const ServiceUsage = ({data, years, services}) => {

    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedService, setSelectedService] = useState(services[0]);

    const handleChangeYear = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleChangeService = (event) => {
        setSelectedService(event.target.value);
    };
    return (
        <div className="bg-white px-5 pb-2.5 pt-6 rounded-2xl shadow-custom-sm">
            <div className='flex flex-wrap items-center gap-4 ms-0 sm:ms-6'>
                <CustomSelectField label={'Année'} selectedValue={selectedYear.toString()} handleValueSelectChange={handleChangeYear} width={'110px'}>
                    {years.map((year) => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                    ))}
                </CustomSelectField>
                <CustomSelectField label={'Service'} selectedValue={selectedService} handleValueSelectChange={handleChangeService} width={'160px'}>
                    {services.map((service) => (
                        <MenuItem key={service} value={service}>
                            {service}
                        </MenuItem>
                    ))}
                </CustomSelectField>
            </div>
            <ServiceUsageChart year={selectedYear} serviceUsageData={data} selectedService={selectedService} />
        </div>
    );
};
ServiceUsage.propTypes = {
    data: PropTypes.object.isRequired,
    years: PropTypes.array.isRequired,
    services: PropTypes.array.isRequired,
};
export default ServiceUsage;