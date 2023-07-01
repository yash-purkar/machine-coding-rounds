import "./styles.css";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { RecipeDetail } from "./Pages/RecipeDetail/RecipeDetail";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}
