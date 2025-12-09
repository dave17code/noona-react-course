import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  console.log("cities?", cities);
  return (
    <div>
      <Button variant="warning" onClick={() => setCity("")}>
        Current Location
      </Button>
      {(cities || []).map((citiData) => (
        <Button
          variant={citiData.variant}
          className="weather-btn"
          key={citiData.name}
          onClick={() => setCity(citiData.name)}
        >
          {citiData.name}
        </Button>
      ))}
    </div>
  );
};

// ⭐ React.memo를 사용하여 Props가 변경되지 않을 경우 불필요한 리렌더링 방지
export default React.memo(WeatherButton);
