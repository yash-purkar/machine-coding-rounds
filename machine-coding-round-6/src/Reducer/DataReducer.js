export const dataInitialState = {
  restaurantsData: [],
  cuisinesData: [],
  selectedCuisineId: null
};

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INITIALIZE_RESTAURANT_DATA":
      return {
        ...state,
        restaurantsData: payload
      };
    case "INITIALIZE_CUISINE_DATA":
      return {
        ...state,
        cuisinesData: payload
      };

    case "SET_CUISINE_ID":
      return {
        ...state,
        selectedCuisineId: payload
      };

    case "ADD_REVIEW":
      return {
        ...state,
        restaurantsData: state?.restaurantsData?.map((el) =>
          el?.id === payload?.restaurantId
            ? { ...el, ratings: [...el?.ratings, payload?.reviewData] }
            : el
        )
      };
    default:
      return {
        state
      };
  }
};
