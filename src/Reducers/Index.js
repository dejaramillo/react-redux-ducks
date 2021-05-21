import { INCREASE_COUNTER } from "../Actions";

export const IncreaseReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    default:
      return state;
  }
};