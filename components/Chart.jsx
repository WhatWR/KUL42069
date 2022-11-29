import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/system';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export function Chart({ people, covid }) {

    const totalPeople = parseFloat(people.VALUE)
    const totalCase = parseFloat(covid.total_case)
    console.log(totalPeople,totalCase)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Case Chart ',
            },
        },
    };

    const labels = ['Total People', 'Total Case'];

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: [totalPeople,totalCase],
                backgroundColor: ['rgba(62, 191, 58, 0.5)','rgba(233, 9, 9, 0.5)'],
            },
            // {
            //     label: 'Total Case',
            //     data: [totalCase],
            //     backgroundColor: 'rgba(233, 9, 9, 0.5)',
            // },
        ],
    };
    return <Box >{totalPeople && totalCase && <Bar options={options} data={data} />}</Box>;



}
