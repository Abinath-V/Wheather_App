
import { useEffect, useState } from "react";
import sun from '../assets/sunny.png';
import Humidity from "../assets/humidity.png";
import windImg from "../assets/wind.png";
import search from "../assets/search.png";
import "./Content.css";

function Content() {
    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState({});
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c95ea30feb4fe7cfe02c3870e7aeb8bf`;
    console.log(api)
    const handleClick = () => {
        const cityName = document.getElementById('searchData').value;
        setCity(cityName);
        
        console.log(typeof cityName);
    };
    useEffect(() => {
        fetch(
          api
        )
          .then((res) => res.json())
          .then((data) => {
            setTemperature(data)
            setTemp(data.main ? (data.main.temp - 273.15 ).toFixed(0): '')
            setHumidity(data.main?data.main.humidity:'')
            setWind(data.wind?(data.wind.speed*3.6).toFixed(0):'')
            setCloud(data.clouds?data.clouds.all:'');
        })
          .catch((err) => console.log(err));
    
      }, [city]);
      const [temp , setTemp]=useState('0');
      const [humidity , setHumidity]=useState('0');
      const [wind , setWind]=useState('0');
      const [cloud , setCloud]=useState('0');
      console.log(cloud)
      let isCloude=false;
      if(cloud>70){
        isCloude=true;
      }
    return (
        <div className="Container">
            <div className="search">
                <input type="search" name="" id="searchData" />
                <button onClick={handleClick}>
                    <img src={search} alt="" style={{ height: "20px" }} />
                </button>
            </div>
            <div className="showTemp">
                <h2>{city}</h2>
                <img src={sun} alt="" id="tempImg"/>
                <h1>{temp}&deg;C</h1>
            </div>
            <div className="humidfy">
                <img src={Humidity} alt="" />
                <h3>humidity</h3>
                <h2>{humidity}%</h2>
            </div>
            <div className="windSpeed">
                <img src={windImg} alt="" />
                <h3>Wind Speed</h3>
                <h2>{wind}km/h</h2>
            </div>
        </div>
    );
}

export default Content;
