import React from 'react';
import PropTypes from "prop-types";
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Sector, Tooltip} from "recharts";
const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
        </g>
    );
};

const ServiceTypesChart = ({year, serviceUsageData, month}) => {
    const colors  = ['#039388', '#75da99', '#facc15', '#d63384', '#7266ba', '#1890ff', '#2f54eb', '#52c41a', '#fa8c16', '#f5222d'];
    const yearData = serviceUsageData[year];
    const pieData = [];

    // Iterate over each service and collect data for selected month
    Object.keys(yearData).forEach(service => {
        const serviceData = yearData[service];
        const monthData = serviceData.find(item => item.month === month);

        if (monthData) {
            pieData.push({
                name: service,
                value: monthData.nombre
            });
        }
    });

    return (
        <div>
            <div className="text-center sm:text-lg font-semibold text-gray-800 my-2">
                Répartition des demandes en {month} {year}
            </div>
            <ResponsiveContainer width="100%" minHeight={350}>
                <PieChart>
                    <Pie
                        activeShape={renderActiveShape}
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        // outerRadius={140}
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value, name, entry) => [`${value} (${((entry.value / pieData.reduce((sum, entry) => sum + entry.value, 0)) * 100).toFixed(2)}%)`, name]}
                        contentStyle={{
                            backgroundColor: '#fff',
                            border:'none',
                            borderRadius: '10px',
                            boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.15)',
                            padding: '5px 10px',
                        }}
                        itemStyle={{
                            color: '#333',
                            fontSize: '14px',
                        }}
                    />
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

ServiceTypesChart.propTypes = {
    year: PropTypes.string.isRequired,
    serviceUsageData: PropTypes.object.isRequired,
    month: PropTypes.string.isRequired,
}
export default ServiceTypesChart;
