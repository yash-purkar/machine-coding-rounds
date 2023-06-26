import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Component/Header";
import { Home } from "./Pages/Home";
import "./CSS/utils.css";
import { PostDetail } from "./Pages/PostDetail";

export default function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}
