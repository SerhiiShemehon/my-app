import { BarChart, Bar, ResponsiveContainer } from 'recharts';

import { DataTinyBarChart } from '../../data';

function TinyBarChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={DataTinyBarChart}>
                <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default TinyBarChart;
