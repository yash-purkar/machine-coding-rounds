import { MidContainer } from "../Component/MidContainer";
import { Sidebar } from "../Component/Sidebar";
import { SortBar } from "../Component/SortBar";

export const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <MidContainer />
      <SortBar />
    </div>
  );
};
