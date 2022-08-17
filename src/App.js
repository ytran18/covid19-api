import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Select } from 'grommet'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirusCovid } from '@fortawesome/free-solid-svg-icons'

import CityInfo from './CityInfo';

function App() {

    const url =`https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true`

    const names = ['Hà Nội','TP. Hồ Chí Minh','Hải Phòng','Nghệ An','Bắc Giang','Vĩnh Phúc','Hải Dương','Quảng Ninh','Bắc Ninh','Thái Nguyên','Phú Thọ','Bình Dương','Nam Định','Thái Bình','Hưng Yên','Hòa Bình','Lào Cai','Đắk Lắk','Thanh Hóa','Lạng Sơn','Sơn La','Yên Bái','Cà Mau','Tuyên Quang','Tây Ninh','Bình Định','Quảng Bình','Hà Giang','Khánh Hòa','Bình Phước','Bà Rịa & Vũng Tàu','Đồng Nai','Đà Nẵng','Vĩnh Long','Ninh Bình','Bến Tre','Cao Bằng','Lâm Đồng','Điện Biên','Hà Nam','Quảng Trị','Cần Thơ','Bắc Kạn','Trà Vinh','Lai Châu','Đắk Nông','Gia Lai','Bình Thuận','Hà Tĩnh','Đồng Tháp','Quảng Nam','Long An','Quảng Ngãi','Thừa Thiên Huế','Bạc Liêu','Phú Yên','An Giang','Kiên Giang','Tiền Giang','Sóc Trăng','Kon Tum','Hậu Giang','Ninh Thuận']
    
    const [data, setData] = useState({})
    const [value, setValue] = useState('')
    
    
    useEffect(() => 
    {
        axios.get(url).then((res) =>
        {
            setData(res.data)
        })
        
    },[url])
    
    return (
    <div className="app">
        <div className='container'>
            <div className='header'>
                <h1>Covid 19 in VietNam</h1>
            </div>

            <div className='generalInfo'>
                <div className='infected'>
                    <FontAwesomeIcon icon={faVirusCovid} size={'4x'}/>
                    <p>Infected</p>
                    {`${data.infected} people`}
                </div>
                <div className='recovered'>
                    <FontAwesomeIcon icon={faVirusCovid} size={'4x'}/>
                    <p>Recovered</p>
                    {`${data.recovered} people`}
                </div>
                <div className='died'>
                    <FontAwesomeIcon icon={faVirusCovid} size={'4x'}/>
                    <p>Died</p>
                    {`${data.died} people`}
                </div>
            </div>

            <br />  

            <div className='todayInfo'>
                <div className='infectedToday'>
                    <FontAwesomeIcon icon={faVirusCovid} size={'4x'}/>
                    <p>Infected Today</p>
                    {`${data.infectedToday} people`}
                </div>
                <div className='recoveredToday'>
                    <FontAwesomeIcon icon={faVirusCovid} size={'4x'}/>
                    <p>Recovered Today</p>
                    {`${data.recoveredToday} people`}
                </div>
                <div className='diedToday'>
                    <FontAwesomeIcon icon={faVirusCovid} size={'4x'}/>
                    <p>Died Today</p>
                    {`${data.diedToday} people`}
                </div>
            </div>


            <div className='cityInfo'>
                <div className='search'>
                    <h3 className='txtPickCity'>Pick city</h3>
                    <Select 
                        value={value}
                        onChange={({ option }) => setValue(option)}
                        options={names}
                    />
                    <br /> <br />
                </div>
                <div className='details'>
                    <CityInfo location={value}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
