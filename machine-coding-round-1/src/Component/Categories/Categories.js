import { UseData } from "../../Context/DataContext";
import { SingleBook } from "../SingleBook/SingleBook";

export const Categories = () => {
  const {
    dataState: { books }
  } = UseData();

  const currentlyReadingBooks = books?.filter(
    (book) => book?.category === "CurrentlyReading"
  );

  const wantsToReadBooks = books?.filter(
    (book) => book?.category === "wantToRead"
  );

  const readBooks = books?.filter((book) => book?.category === "read");

  return (
    <>
      <div>
        <h2 className="category-header">
          Currently Reading ({currentlyReadingBooks?.length})
        </h2>
        <div className="books-container">
          {currentlyReadingBooks?.map((book) => (
            <SingleBook key={book?.id} book={book} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="category-header">
          Want to Read ({wantsToReadBooks?.length})
        </h2>
        <div className="books-container">
          {wantsToReadBooks?.map((book) => (
            <SingleBook key={book?.id} book={book} />
          ))}
        </div>
      </div>

      <div className="category-header">
        <h2>Read ({readBooks?.length})</h2>
        <div className="books-container">
          {readBooks?.map((book) => (
            <SingleBook key={book?.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};
