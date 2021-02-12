import { createStore, combineReducers } from "redux";

const counterInitialState = { value: 0 };

function counterReducer(state = counterInitialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

const dataInitialState = { value: null };

function dataReducer(state = dataInitialState, action) {
  switch (action.type) {
    case "setData":
      return { ...state, value: action.data };
    default:
      return state;
  }
}

function reducer1() {
  return combineReducers({
    reducer1ChildReducer,
    reducer1ChildReducer2
  });
}

function reducer1ChildReducer(state = "child") {
  return state;
}

function reducer1ChildReducer2(state = { value: "child" }, action) {
  if (action.type === "uniquetype/grow") {
    return { value: "adult" };
  }
  return state;
}

function reducer2(state = 2) {
  return state;
}

const rootReducer = combineReducers({
  reducer1: reducer1(),
  reducer2,
  counter: counterReducer,
  data: dataReducer
});

const store = createStore(rootReducer);

export default store;
