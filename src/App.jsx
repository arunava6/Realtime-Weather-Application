
import './App.css';
import { useEffect, useState,useCallback } from "react";
import TopButtons from './component/TopButtons';
import Input1 from './component/Input1';
import TimeAndLocation from './component/TimeAndLocation';
import TemperatureAndDetail from './component/TemperatureAndDetail';
import Forecast from './component/Forecast';
import getFormattedWeatherData from './Services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {

  const [query, setQuery] = useState({ q: "Kolkata" })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const getWeather = useCallback(async () => {
    const cityName = query.q ? query.q : 'current location'
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`)

    const data = await getFormattedWeatherData({ ...query, units }).then(data => {
      toast.success(`fetched weather data for ${data.name}, ${data.country}`)
      setWeather(data);
    });
    console.log(data);
  }, [query, units]);

  useEffect(() => {getWeather()}, [getWeather]);

  // const formatBackground = () => {
  //   if (!weather) return ' from-cyan-600 to-blue-700';
  //   const threshold = units === "metric" ? 20 : 60;
  //   if (weather.temp <= threshold) return "from-cyan-600 to-blue-700";
  //   return "from-yellow-600 to-orange-700";
  // }
  const formatBackground = (details) => {
    if (!details) return 'from-cyan-600 to-blue-700';
  
    if (details.includes("Clear")) {
      return "clear";  // Clear background image
    } else if (details.includes("Clouds")) {
      return "clouds";  // Cloudy background image
    } else if (details.includes("Rain") || details.includes("Storm")) {
      return "rain";  // Rainy background image
    } else if (details.includes("Haze")) {
      return "haze";  // Hazy background image
    } else if (details.includes("Mist")) {
      return "mist";  // Misty background image
    }
  
    return "from-cyan-600 to-blue-700";  // Default background
  };
  
  return (
      <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground(weather?.details)}`}>
        <TopButtons setQuery={setQuery} />
        <Input1 setQuery={setQuery} setUnits={setUnits} />
    
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetail weather={weather} units={units} />
            <Forecast title="3 hour step forecast" data={weather.hourly} units={units} />
            <Forecast title="daily forecast" data={weather.daily} units={units} />
          </>
        )}
        <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
      </div>
)
}

export default App;
