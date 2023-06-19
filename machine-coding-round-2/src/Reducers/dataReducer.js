export const dataReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_NEW_HABIT":
      return {
        ...state,
        habits: state.habits.some((el) => el.id === payload.id)
          ? state.habits.map((item) =>
              item.id === payload.id ? { ...payload } : item
            )
          : [...state.habits, payload],
        habitIdToBeEdit: null,
        showForm: false
      };

    case "SET_HABIT_TO_OPEN":
      return {
        ...state,
        selectedHabit: payload,
        showForm: false
      };
    case "HABIT_EDIT":
      return {
        ...state,
        habitFormData: payload.selectedHabit,
        showForm: true,
        showDetailModal: false,
        habitIdToBeEdit: payload.id
      };
    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        archived: [...state.archived, payload],
        habits: state?.habits.filter((habit) => habit.name !== payload.name),
        showDetailModal: false
      };

    case "SET_HABIT_FORM_DATA":
      return {
        ...state,
        habitFormData: payload
      };

    case "DELETE_HABIT":
      return {
        ...state,
        habits: state.habits.filter((el) => el.name !== payload.name),
        showDetailModal: false
      };

    case "SHOW_HABIT_MODAL":
      return {
        ...state,
        showDetailModal: true
      };

    case "SHOW_FORM":
      return {
        ...state,
        showForm: true,
        showDetailModal: false
      };

    case "HIDE_HABIT_MODAL":
      return {
        ...state
      };

    case "SET_HABIT_ID":
      return {
        ...state,
        habitIdToBeEdit: payload
      };
    default:
      return state;
  }
};
