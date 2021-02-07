import { useState } from "react";
const useToggleState = (initialVal) => {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};
export default useToggleState;
