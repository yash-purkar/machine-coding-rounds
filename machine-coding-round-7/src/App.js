import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Contients } from "./Pages/Continents";
import { Countries } from "./Pages/Countries";
import { Destinations } from "./Pages/Destinations";
import { DestinationDetail } from "./Pages/DestinationDetail";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Contients />} />
        <Route path="/continents/:name" element={<Countries />} />
        <Route
          path="/continents/:name/:countryName"
          element={<Destinations />}
        />
        <Route
          path="/continents/:name/:countryName/:destination"
          element={<DestinationDetail />}
        />
      </Routes>
    </div>
  );
}
