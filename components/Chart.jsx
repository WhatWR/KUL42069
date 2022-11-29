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


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export function Chart({ people, covid }) {
    const totalPeople = people.VALUE
    const totalCase = covid.total_case
    console.log((totalPeople), totalCase)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart ',
            },
        },
    };

    const labels = ['Total People', 'Total Case'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: totalPeople,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: totalCase,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <>{people && covid && <Bar options={options} data={data} />}</>;
}
