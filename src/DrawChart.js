import axios from 'axios'

import 
{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import { useEffect, useState } from 'react'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


function DrawChart ({ location })
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
    let numberCase1 = 0
    let numberDeath1 = 0
   
    if( typeof locationInfo !== 'undefined')
    {
        let index = 0
        for (index; index < 63; index++) {
            if( locationInfo[index].name == location)
            {
                console.log(locationInfo[index].name,'100');
                numberCase = locationInfo[index].cases
                numberDeath = locationInfo[index].death
            }
            
        }
        numberCase1 = numberCase
        numberDeath1 = numberDeath
    }

    console.log( numberCase1,'10');
    console.log( numberDeath1,'20');

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
        title: {
            display: true,
            text: `Covid 19 in ${location}`,
        },
      },
    }

    const labels = ['data']

    const data = {
        labels,
        datasets: [
            {
              label: 'Cases',
              data: `${numberCase1}`,
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Death',
              data: `${numberDeath1}`,
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
    }

    return(
        <Bar options={options} data={data} />
    )
}

export default DrawChart