import { createStore } from "redux";
function countReducer(state = 0, action = {}) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer);

window.store = store;
