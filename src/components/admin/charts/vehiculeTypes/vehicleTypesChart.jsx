import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer, Sector,
    Tooltip,
} from "recharts";
import PropTypes from "prop-types";
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
const VehicleTypesChart = ({vehicleTypes}) => {
    const colors  = ['#039388', '#a3f1bf', '#facc15', '#d63384', '#7266ba', '#1890ff', '#2f54eb', '#52c41a', '#fa8c16', '#f5222d'];

    return (
        <div>
            <div className="text-center sm:text-lg font-semibold text-gray-800 my-2">
                Répartition des Types de Véhicules
            </div>
            <ResponsiveContainer width="100%" height={270}>
                <PieChart>
                    <Pie
                        activeShape={renderActiveShape}
                        data={vehicleTypes}
                        dataKey="nombre"
                        nameKey="type"
                        cx="50%"
                        cy="50%"
                    >
                        {vehicleTypes.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(nombre, type, entry) => [`${nombre} (${((entry.value / vehicleTypes.reduce((sum, entry) => sum + entry.nombre, 0)) * 100).toFixed(2)}%)`, type]}
                        contentStyle={{
                            backgroundColor: '#fff',
                            border: 'none',
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

VehicleTypesChart.propTypes = {
    vehicleTypes: PropTypes.array.isRequired,
};

export default VehicleTypesChart;