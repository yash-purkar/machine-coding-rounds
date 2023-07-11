import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../Component/Button";
import { UseData } from "../Context/DataContext";

export const DestinationDetail = () => {
  const { name, countryName, destination } = useParams();
  const {
    dataState: { data }
  } = UseData();
  const continent = data?.continents?.find((el) => el?.name === name);

  const country = continent?.countries?.find((el) => el?.name === countryName);

  const destinationDetail = country?.destinations?.find(
    (el) => el?.name === destination
  );

  return (
    <div>
      <h1 className="text-[#797979] text-center text-2xl my-5 text-2xl font-bold">
        {destinationDetail?.name}
      </h1>
      <div className="max-w-[600px] flex flex-col m-auto items-center p-5 shadow-lg m-2 rounded-lg">
        <img
          src={destinationDetail?.image}
          alt={destinationDetail?.name}
          className="w-60 rounded-lg mb-5"
        />
        <div>
          <p className="my-2 text-[#797979]">
            <span className="text-[#933c3c] font-bold">Description: </span>
            {destinationDetail?.description}
          </p>
          <p className="my-2 text-[#797979]">
            <span className="text-[#933c3c] font-bold">Ratings: </span>
            {destinationDetail?.ratings}
          </p>
          <p className="my-2 text-[#797979]">
            <span className="text-[#933c3c] font-bold">Reviews: </span>
            {destinationDetail?.reviews}
          </p>
          <p className="my-2 text-[#797979]">
            <span className="text-[#933c3c] font-bold">Location: </span>
            {destinationDetail?.location}
          </p>
          <p className="my-2 text-[#797979]">
            <span className="text-[#933c3c] font-bold">Opening Hours: </span>
            {destinationDetail?.openingHours}
          </p>
          <p className="my-2 text-[#797979]">
            <span className="text-[#933c3c] font-bold">Ticket Price</span>
            {destinationDetail?.ticketPrice}
          </p>
          <a href={destinationDetail?.website}>Website</a>
        </div>
      </div>
      <div className="flex justify-center">
        <Button />
      </div>
    </div>
  );
};
