export const DataInitialSate = {
  data: [],
  itemIdToBeEdit: null
};
export const DataReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "INITIALIZE_DATA":
      return {
        ...state,
        data: payload
      };
    case "ADD_NEW_RECIPE":
      return {
        ...state,
        data: [...state?.data, payload]
      };

    case "EDIT_RECIPE":
      return {
        ...state,
        itemIdToBeEdit: payload
      };

    case "DATA_OPERATIONS":
      return {
        ...state,
        data: payload,
        itemIdToBeEdit: null
      };

    default:
      return {
        state
      };
  }
};
