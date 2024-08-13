import {Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import PropTypes from "prop-types";

const ServiceUsageChart = ({year, serviceUsageData, selectedService}) => {

    const data = serviceUsageData[year][selectedService];

    return (
        <div>
            <div className="text-center sm:text-lg font-semibold text-gray-800 my-2">
                Nombre mensuel de demandes pour {selectedService} en {year}
            </div>
            <ResponsiveContainer width="100%" minHeight={350}>
                <AreaChart
                    data={data}
                    margin={{top: 10, bottom: 5}}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#039388" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#039388" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip contentStyle={{
                        backgroundColor: '#fff',
                        border: 'none',
                        borderRadius: '10px',
                        boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.15)',
                        padding: '5px 10px',}}
                        itemStyle={{
                            color: '#333',
                            fontSize: '14px',
                        }}/>
                    <Legend/>
                    <Area type="monotone" dataKey="nombre" stroke="#039388" fill="url(#colorUv)"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

ServiceUsageChart.propTypes = {
    year: PropTypes.number.isRequired,
    serviceUsageData: PropTypes.object.isRequired,
    selectedService: PropTypes.string.isRequired,
};

export default ServiceUsageChart;

