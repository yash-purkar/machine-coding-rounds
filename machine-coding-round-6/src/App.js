import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { RestaurantDetail } from "./Pages/RestaurantDetail/RestaurantDetail";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </div>
  );
}
