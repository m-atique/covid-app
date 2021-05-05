import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Charts.module.css'
import { registerables } from 'chart.js';


const Charts = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchedApiData = async () => {

            setDailyData(await fetchDailyData())
        }
        console.log(dailyData)
        fetchedApiData()



    }, [])
    const lineChart = (
        dailyData.length ? (

            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                        {
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            backgroundColor:'rgba(0,0,255,0.4)',
                            fill: true
                        },
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor:'rgba(255,0,0,0.4)',
                            fill:true
                        },
                    ]
                }}
            />
        ) : null

    );
    //--------------------------------------------------BAR CHART
    const barChart =(
       confirmed ?(
            <Bar 
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'No of People',
                    backgroundColor:['rgba(0,0,255,0.4)','rgba(0,255,0,0.4)','rgba(255,0,0,0.4)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                    
                }]
            }}
            Options={{
                labels:{display:false},
                title:{dispaly:true ,text:`Current state of ${country}`}
            }}
            />
        ):null

    )
    return (
        <div style ={{margin:'15px'}}>
            {country? barChart:lineChart}
        </div>
    )
}
export default Charts