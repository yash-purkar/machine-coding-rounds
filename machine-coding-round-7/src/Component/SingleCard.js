import { CiLocationOn } from "react-icons/ci";
export const SingleCard = ({ data, handleNavigate }) => {
  const handleClick = () => {
    handleNavigate(data?.name);
    window.scrollTo(0, 0);
  };
  return (
    <div
      onClick={handleClick}
      className="shadow-lg mb-5 relative cursor-pointer"
    >
      <img
        src={data?.image}
        alt={data?.name}
        className="w-48 lg:w-60 lg:h-48 h-40 rounded-xl"
      />
      <p className="w-full h-[30%] font-bold text-sm absolute bottom-0 text-white p-2 flex items-center gap-1 bg-black bg-opacity-30 rounded-xl">
        <CiLocationOn /> {data?.name}
      </p>
    </div>
  );
};
