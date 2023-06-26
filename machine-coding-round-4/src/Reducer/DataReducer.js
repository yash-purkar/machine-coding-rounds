export const DataReducer = (state, action) => {
  const { type, payload } = action;
  console.log("Hi", payload);
  switch (type) {
    case "UPVOTE":
      return {
        ...state,
        data: {
          ...state.data,
          posts: state?.data?.posts?.map((el) =>
            el?.postId === payload ? { ...el, upvotes: el?.upvotes + 1 } : el
          )
        }
      };
    case "DOWNVOTE":
      return {
        ...state,
        data: {
          ...state.data,
          posts: state?.data?.posts?.map((el) =>
            el?.postId === payload
              ? {
                  ...el,
                  upvotes: el?.upvotes - 1
                }
              : el
          )
        }
      };

    case "BOOKMARK_OPERATION":
      return {
        ...state,
        bookmarks: state?.bookmarks?.includes(payload)
          ? state?.bookmarks?.filter((el) => el !== payload)
          : [...state.bookmarks, payload]
      };

    case "SORT_BY":
      return {
        ...state,
        sortBy: payload
      };

    default:
      return {
        state
      };
  }
};
