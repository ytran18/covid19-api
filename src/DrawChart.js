// import axios from 'axios'

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

// import { useState } from 'react'

// import { Bar } from 'react-chartjs-2'

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// )


 


// function DrawChart ({ location })
// {

//     const [info, setInfo] = useState({})

//     const url =`https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true`

//     axios.get(url).then((res) =>
//     {
//         setData(res.data)
//     }) 

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top'
//             },
//         title: {
//             display: true,
//             text: 'Chart.js Bar Chart',
//         },
//       },
//     }

//     // const data = {
//     //     datasets: [
//     //         {
//     //           label: 'Dataset 1',
//     //           data: data.locations ,
//     //           backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     //         },
//     //         {
//     //           label: 'Dataset 2',
//     //           data: ,
//     //           backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     //         },
//     //       ],
//     // }

//     return(
//         <Bar options={options} data={data} />
//     )
// }

// export default DrawChart