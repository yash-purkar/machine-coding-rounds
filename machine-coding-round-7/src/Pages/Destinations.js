import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../Component/Button";
import { SingleCard } from "../Component/SingleCard";
import { UseData } from "../Context/DataContext";
export const Destinations = () => {
  const { name, countryName } = useParams();
  const {
    dataState: { data }
  } = UseData();
  const navigate = useNavigate();

  const contient = data?.continents?.find((el) => el?.name === name);

  const country = contient?.countries?.find((el) => el?.name === countryName);

  const handleNavigate = (destination) => {
    navigate(`/continents/${name}/${countryName}/${destination}`);
  };

  return (
    <div>
      <h1 className="text-[#797979] text-center text-2xl my-14 text-2xl font-bold">
        Top Destinations In {country?.name} for your next holiday
      </h1>
      <div className="flex gap-10 flex-wrap justify-center mt-24">
        {country?.destinations?.map((data) => (
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
