
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import TopButton from './component/TopButton';
import Inputs from './component/Inputs';
import TimeAndLocation from './component/TimeAndLocation';
import TempAndDetails from './component/TempAndDetails';
import Forecast from './component/Forecast';
import getFormattedWeatherData from './services/WeatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase()+ string.slice(1);
}
function App() {
  const [query,setQuery]=useState({ q:"pune"})
  const[units,setUnits]=useState('metric')
  const[weather,setWeather]=useState(null)

  const getWeather =async  ()=>{
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`)
 const data = await getFormattedWeatherData({...query, units}).then((data)=>{
  toast.success(`Fetched weather data for ${data.name}, ${data.country}`)
  setWeather(data)
})
 console.log(data);
  };
  useEffect(()=>{
    getWeather();
  },[query, units]);




  return (<>
  
    <Container style={{ backgroundColor:"blue" }} >
 <TopButton setQuery={setQuery}/>
 <Inputs setQuery={setQuery} setUnits={setUnits}/>

 {weather && (
  <>
   <TimeAndLocation weather={weather}/>
   <TempAndDetails weather={weather} units={units}/>
   <Forecast title ='3 hour step forecast' data={weather.hourly} />
   <Forecast title ='daily forecast' data={weather.daily} />
   </>
 )}
<ToastContainer autoClose={2500} hideProgressBar={true} theme='colored'/>
   </Container>
   </>
  );
}

export default App;
