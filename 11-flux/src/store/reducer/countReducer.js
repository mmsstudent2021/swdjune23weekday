const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase": {
      return (state = state + 1);
      break;
    }
    case "decrease": {
      return (state = state - 1);
      break;
    }
    default:
      return state;
  }
};

export default counterReducer;
