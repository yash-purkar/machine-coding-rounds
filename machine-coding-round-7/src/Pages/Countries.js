import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../Component/Button";
import { SingleCard } from "../Component/SingleCard";
import { UseData } from "../Context/DataContext";
export const Countries = () => {
  const { name } = useParams();
  const {
    dataState: { data }
  } = UseData();
  const navigate = useNavigate();

  const continent = data?.continents?.find((el) => el?.name === name);

  const handleNavigate = (countryName) => {
    navigate(`/continents/${name}/${countryName}`);
  };

  return (
    <div>
      <h1 className="text-[#797979] text-center text-2xl my-14 text-2xl font-bold">
        Top Countries In {continent?.name} for your next holiday
      </h1>
      <div className="flex gap-10 flex-wrap justify-center mt-24">
        {continent?.countries?.map((data) => (
          <SingleCard
            key={data?.id}
            data={data}
            handleNavigate={handleNavigate}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button />
      </div>
    </div>
  );
};
