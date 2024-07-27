import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import { GoDotFill } from "react-icons/go";
import './TotalTransactionsChart.css'; // Import the CSS file for styling

const TotalTransactionsChart = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const myChartRef = useRef<Chart<"line"> | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            if (ctx && myChartRef.current) {
                myChartRef.current.destroy();
            }

            myChartRef.current = new Chart(ctx!, {
                type: 'line',
                data: {
                    labels: [
                        '01 Mar', '02 Mar', '03 Mar', '04 Mar', '05 Mar', '06 Mar', '07 Mar',
                        '08 Mar', '09 Mar', '10 Mar', '11 Mar', '12 Mar', '13 Mar', '14 Mar',
                        '15 Mar', '16 Mar', '17 Mar', '18 Mar', '19 Mar', '20 Mar', '21 Mar',
                        '22 Mar', '23 Mar', '24 Mar', '25 Mar', '26 Mar', '27 Mar', '28 Mar',
                        '29 Mar', '30 Mar', '31 Mar', '01 Apr'
                    ],
                    datasets: [
                        // {
                        //     label: 'Pending',
                        //     data: Array(32).fill(0),
                        //     borderColor: 'green',
                        //     backgroundColor: 'rgba(114, 62, 235, 0.2)',
                        //     borderWidth: 2,
                        //     pointRadius: 0, // hide points
                        // },
                        // {
                        //     label: 'Complete',
                        //     data: Array(32).fill(0),
                        //     borderColor: 'green',
                        //     backgroundColor: 'rgba(0, 128, 0, 0.2)',
                        //     borderWidth: 2,
                        //     pointRadius: 1, // hide points
                        // },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false, // Allow the chart to adjust to the container's aspect ratio
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: false,
                            text: 'Total Transactions Chart',
                        },
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false, // Hide x-axis grid lines
                            },
                        },
                        y: {
                            beginAtZero: true,
                            max: 5, // Set max value to 5
                            ticks: {
                                stepSize: 1,
                            },
                        },
                    },
                },
            });

            return () => {
                if (myChartRef.current) {
                    myChartRef.current.destroy();
                }
            };
        }
    }, []);

    return (
        <div className="chart-container bg-white rounded-xl p-6 mt-20 pb-20 md:pb-24">
            <h2 className='mb-6 text-sm font-medium'>Total Transactions Chart</h2>
            <canvas ref={chartRef}></canvas>
            <div className='flex items-center justify-center'>
                <h2 className='flex items-center text-xs'><span className='text-2xl text-[#723EEB]'><GoDotFill /></span> Pending</h2>
                <h2 className='flex items-center text-xs ml-4'><span className='text-2xl text-[#0AC484]'><GoDotFill /></span> Complete</h2>
            </div>
        </div>
    );
};

export default TotalTransactionsChart;
