import './Charts.css';
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const Charts = ({chartData}) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
            <SimpleCharts chartData={chartData} />
        </div>
    )
}

function SimpleCharts({chartData}) {
    console.log(chartData);
  return (
    <>
    {chartData.labels.length > 0 &&
        <BarChart
            xAxis={[
                {
                id: 'barCategories',
                data: chartData.labels,
                scaleType: 'band',
                },
            ]}
            series={[
                {
                data: chartData.data,
                },
            ]}
            width={500}
            height={300}
        />
    }
    </>
  );
}

export default Charts;