import { Filters } from "../../Component/Filters/Filters";
import { ProductListing } from "../ProductListing/ProductListing";
import "./Home.css";
export const Home = () => {
  return (
    <div>
      <h1 className="main-heading">QuickFood</h1>
      <Filters />
      <ProductListing />
    </div>
  );
};
