import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { HabitListing } from "./Pages/HabitListing/HabitListing";
import { Archive } from "./Pages/Archive/Archive";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HabitListing />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}
