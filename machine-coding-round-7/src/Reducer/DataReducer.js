export const dataInitialState = {
  data: []
};

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INITIALIZE_DATA":
      return {
        ...state,
        data: payload
      };
    default:
      return {
        state
      };
  }
};
