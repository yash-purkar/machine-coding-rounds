import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Search.css";
import { SingleBook } from "../Component/SingleBook/SingleBook";
import { UseData } from "../Context/DataContext";

export const Search = () => {
  const {
    dataState: { books }
  } = UseData();
  const [searchValue, setSearchValue] = useState("");

  const filteredData = searchValue
    ? books?.filter((book) =>
        book?.title?.toLowerCase().includes(searchValue?.toLowerCase())
      )
    : books;

  return (
    <div>
      <div className="search-container">
        <NavLink to="/" className="goback-option">
          &larr;
        </NavLink>
        <label>
          <input
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className="input-box"
            placeholder="Search Book"
            autoFocus
          />
        </label>
      </div>
      {filteredData?.length > 0 ? (
        <div className="books-container">
          {filteredData?.map((book) => (
            <SingleBook key={book?.id} book={book} />
          ))}
        </div>
      ) : (
        <h2 className="not-found-heading">Book Not Found</h2>
      )}
    </div>
  );
};
