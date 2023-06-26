import { useState } from "react";
import { UseData } from "../Context/DataContext";

export const Home = () => {
  const [searchValue, setSearchValue] = useState();
  const [sortBy, setSortBy] = useState(null);
  const {
    dataState: { data }
  } = UseData();

  const handleSortBy = (data) => setSortBy(data);

  const transformData = () => {
    let filteredData = [...data];
    if (searchValue) {
      filteredData = filteredData?.filter(
        (el) =>
          el?.product_name?.toLowerCase().includes(searchValue.toLowerCase()) ||
          el?.ingredients?.some((item) =>
            item?.toLowerCase()?.includes(searchValue?.toLowerCase())
          )
      );
    }

    if (sortBy) {
      if (sortBy === "name") {
        filteredData = filteredData?.sort((a, b) =>
          a.product_name.toLowerCase() > b.product_name.toLowerCase() ? 1 : -1
        );
      }

      if (sortBy === "price") {
        filteredData = filteredData?.sort((a, b) => a.price - b.price);
      }

      if (sortBy === "ingredients") {
        filteredData = filteredData?.sort((a, b) =>
          a.ingredients[0].toLowerCase() > b.ingredients[0].toLowerCase()
            ? 1
            : -1
        );
      }
      if (sortBy === "caleories") {
        filteredData = filteredData?.sort((a, b) => a.calories - b.calories);
      }

      // descending
      if (sortBy === "nameDesc") {
        filteredData = filteredData?.sort((a, b) =>
          a.product_name.toLowerCase() > b.product_name.toLowerCase() ? -1 : 1
        );
      }

      if (sortBy === "caleoriesDesc") {
        filteredData = filteredData?.sort((a, b) => b.calories - a.calories);
      }

      if (sortBy === "priceDesc") {
        filteredData = filteredData?.sort((a, b) => b.price - a.price);
      }

      if (sortBy === "ingredientsDesc") {
        filteredData = filteredData?.sort((a, b) =>
          a.ingredients[0].toLowerCase() > b.ingredients[0].toLowerCase()
            ? -1
            : 1
        );
      }
    }

    return filteredData;
  };
  return (
    <>
      <input
        placeholder="Search an item"
        style={{ margin: "1rem" }}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <table border={1} style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <th>Id</th>
            <th
              onClick={() =>
                handleSortBy(sortBy === "name" ? "nameDesc" : "name")
              }
              className="cursor-pointer"
            >
              Product Name
            </th>
            <th>Product Weight</th>
            <th
              onClick={() =>
                handleSortBy(sortBy === "price" ? "priceDesc" : "price")
              }
              className="cursor-pointer"
            >
              Price (INR)
            </th>
            <th
              onClick={() =>
                handleSortBy(
                  sortBy === "caleories" ? "caleoriesDesc" : "caleories"
                )
              }
              className="cursor-pointer"
            >
              Caleories
            </th>
            <th
              onClick={() =>
                handleSortBy(
                  sortBy === "ingredients" ? "ingredientsDesc" : "ingredients"
                )
              }
              className="cursor-pointer"
            >
              Ingredients
            </th>
          </tr>
          {transformData()?.map((el) => {
            const {
              id,
              product_name,
              product_weight,
              price,
              calories,
              ingredients
            } = el;
            return (
              <tr key={el?.id} style={{ padding: "0.5rem" }}>
                <td>{id}</td>
                <td>{product_name}</td>
                <td>{product_weight}</td>
                <td>{price}</td>
                <td>{calories}</td>
                <td>
                  {ingredients?.map((item) => (
                    <span key={item}>{item}, </span>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
