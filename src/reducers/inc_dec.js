//actual state changing process happens in reducers
// reducer accepts initial state and action & returns new state
//we have to register all the reducers inside a single root reducer
//each reducer represents a specific task
//reducer stores new state in store

//we cant directly update initial state
const initialState = 1;

export const inc_dec = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};
