import './App.css';
import axios from 'axios';
import { useState } from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import DrawChart from './DrawChart';

function App() {

    const url =`https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true`

    const names = ['Hà Nội','TP. Hồ Chí Minh','Hải Phòng','Nghệ An','Bắc Giang','Vĩnh Phúc','Hải Dương','Quảng Ninh','Bắc Ninh','Thái Nguyên','Phú Thọ','Bình Dương','Nam Định','Thái Bình','Hưng Yên','Hòa Bình','Lào Cai','Đắk Lắk','Thanh Hóa','Lạng Sơn','Sơn La','Yên Bái','Cà Mau','Tuyên Quang','Tây Ninh','Bình Định','Quảng Bình','Hà Giang','Khánh Hòa','Bình Phước','Bà Rịa & Vũng Tàu','Đồng Nai','Đà Nẵng','Vĩnh Long','Ninh Bình','Bến Tre','Cao Bằng','Lâm Đồng','Điện Biên','Hà Nam','Quảng Trị','Cần Thơ','Bắc Kạn','Trà Vinh','Lai Châu','Đắk Nông','Gia Lai','Bình Thuận','Hà Tĩnh','Đồng Tháp','Quảng Nam','Long An','Quảng Ngãi','Thừa Thiên Huế','Bạc Liêu','Phú Yên','An Giang','Kiên Giang','Tiền Giang','Sóc Trăng','Kon Tum','Hậu Giang','Ninh Thuận']
    
    const [city, setCity] = useState([])
    const [data, setData] = useState({})

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    axios.get(url).then((res) =>
    {
        setData(res.data)
    })

    return (
    <div className="app">
        <div className='container'>
            <div className='header'>
                <h1>Covid 19 in VietNam</h1>
            </div>

            <div className='generalInfo'>
                <div className='infected'>
                    <p>Infected</p>
                    {`${data.infected} people`}
                </div>
                <div className='recovered'>
                    <p>Recovered</p>
                    {`${data.recovered} people`}
                </div>
                <div className='died'>
                    <p>Died</p>
                    {`${data.died} people`}
                </div>
            </div>

            <br />  <br />  <br />

            <div className='todayInfo'>
                <div className='infectedToday'>
                    <p>Infected Today</p>
                    {`${data.infectedToday} people`}
                </div>
                <div className='recoveredToday'>
                    <p>Recovered Today</p>
                    {`${data.recoveredToday} people`}
                </div>
                <div className='diedToday'>
                    <p>Died Today</p>
                    {`${data.diedToday} people`}
                </div>
            </div>

            <br />  <br />  <br />

            <div className='cityInfo'>
                <div className='search'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-multiple-name-label">City</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                value={city}
                                label='City'
                                onChange={handleChange}
                            >
                                {
                                    names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className='details'>
                    {/* <DrawChart location={data.locations}/> */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
