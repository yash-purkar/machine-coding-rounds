import { SingleCard } from "../Component/SingleCard";
import { UseData } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";

export const Contients = () => {
  const {
    dataState: { data }
  } = UseData();
  const navigate = useNavigate();

  const handleNavigate = (name) => {
    navigate(`continents/${name}`);
  };
  return (
    <div>
      <h1 className="text-[#797979] text-center text-2xl my-14 font-bold">
        Top Continents for your next holiday
      </h1>
      <div className="flex gap-10 flex-wrap justify-center mt-24">
        {data?.continents?.map((data) => (
          <SingleCard
            key={data?.id}
            data={data}
            handleNavigate={handleNavigate}
          />
        ))}
      </div>
    </div>
  );
};
