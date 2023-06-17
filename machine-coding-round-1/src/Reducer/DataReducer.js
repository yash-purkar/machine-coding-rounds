export const DataReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === payload.id
            ? { ...book, category: payload.category }
            : book
        )
      };
    default:
      return state;
  }
};
