import './CityInfo.css'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirusCovid } from '@fortawesome/free-solid-svg-icons'

// import 
// {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// } from 'chart.js'

import { useEffect, useState } from 'react'

// import { Bar } from 'react-chartjs-2'

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// )




function CityInfo ({ location })
{

    const [info, setInfo] = useState({})

    const url =`https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true`

    useEffect(() =>
    {
        axios.get(url).then((res) =>
        {
            setInfo(res.data)
        }) 
    },[url]) 


    
    let locationInfo = info.locations

    let numberCase = 0
    let numberDeath = 0
    let numberRecovered = 0
    let numberCase1 = 0
    let numberDeath1 = 0
    let numberRecovered1 = 0
   
    if( typeof locationInfo !== 'undefined')
    {
        let index = 0
        for (index; index < 63; index++) {
            if( locationInfo[index].name === location)
            {
                numberCase = locationInfo[index].cases
                numberDeath = locationInfo[index].death
                numberRecovered = locationInfo[index].recovered
            }
            
        }
        numberCase1 = numberCase
        numberDeath1 = numberDeath
        numberRecovered1 = numberRecovered
    }

    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'top'
    //         },
    //     title: {
    //         display: true,
    //         text: `Covid 19 in ${location}`,
    //     },
    //   },
    // }

    // const labels = ['data']

    // const data = {
    //     labels,
    //     datasets: [
    //         {
    //           label: 'Cases',
    //           data: `${numberCase1}`,
    //           backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //         },
    //         {
    //           label: 'Death',
    //           data: `${numberDeath1}`,
    //           backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //         },
    //       ],
    // }

    return(
        <div className='todayInfo'>
            {/* <Bar options={options} data={data} /> */}
                <div className='if'>
                    <FontAwesomeIcon icon={faVirusCovid} size={'4x'}/>
                    <p>Infected</p>
                    {`${numberCase1} people`}
                </div>
                <div className='re'>
                    <FontAwesomeIcon icon={faVirusCovid} size={'4x'}/>
                    <p>Recovered</p>
                    {`${numberRecovered1} people`}
                </div>
                <div className='di'>
                    <FontAwesomeIcon icon={faVirusCovid} size={'4x'}/>
                    <p>Died</p>
                    {`${numberDeath1} people`}
                </div>
            </div>
    )
}

export default CityInfo