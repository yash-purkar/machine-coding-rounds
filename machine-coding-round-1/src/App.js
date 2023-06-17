import "./styles.css";
import "./Component/Categories/Categories.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Search } from "./Pages/Search";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
