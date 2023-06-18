import { UseData } from "../../Context/DataContext";
import "./SingleBook.css";
export const SingleBook = ({ book }) => {
  const { dataDispatch } = UseData();

  const { id, title, author, bookImg } = book;

  const handleCategoryChange = (e) => {
    dataDispatch({
      type: "CHANGE_CATEGORY",
      payload: {
        id,
        category: e.target.value
      }
    });
  };

  return (
    <div className="card-outer">
      <div className="book-card">
        <img src={bookImg} alt="img" className="book-img" />
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
      </div>

      <div className="move-options">
        <select onChange={handleCategoryChange} className="select-box">
          <option className="move-to">Move To...</option>
          {["CurrentlyReading", "wantToRead", "read"]?.map((category) => (
            <option key={category} value={category}>
              {category === book?.category && `✔`} {category}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    </div>
  );
};
