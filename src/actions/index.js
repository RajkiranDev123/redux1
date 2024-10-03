//Actions ==> what to do : inside type field/property as string constant
//describe type of change
//actions are plain js object
//actions dont tell how to do but reducers do

export const increase = () => {
  // increase ==> is action creator
  return {
    // action object
    type: "INCREMENT",
  };
};

export const decrease = () => {
  return { type: "DECREMENT" };
};
