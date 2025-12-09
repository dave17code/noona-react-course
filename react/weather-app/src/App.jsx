import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// 1. 앱이 실행되자마다 현재 위치기반의 날씨가 보인다
// 2. 날씨 정보에는 도시, 섭씨 화씨 날씨상태
// 3. 5개의 버튼이 있다 (1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다

// ----------------------------------------------------
// App 메인 함수
// ----------------------------------------------------

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const CITIES_DATA = [
    { name: "Seoul", variant: "success" },
    { name: "Tokyo", variant: "danger" },
    { name: "Paris", variant: "primary" },
    { name: "New york", variant: "dark" },
  ];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    console.log("data", data);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data", data);
    setWeather(data);
  };

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton
          getCurrentLocation={getCurrentLocation}
          cities={CITIES_DATA}
          setCity={setCity}
        />
      </div>
    </div>
  );
}

export default App;
