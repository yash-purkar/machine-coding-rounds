import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Button = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#797979] text-white py-0.5 px-3 my-5  rounded-lg flex items-center gap-1"
    >
      <BiArrowBack /> Home
    </button>
  );
};
