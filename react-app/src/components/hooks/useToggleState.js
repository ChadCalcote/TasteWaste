// React Dependency
import { useState } from "react";

// Custom Hook that I will use for changing the value of checkboxes in form
// Takes in an initial value (false)
const useToggleState = (initialVal) => {
  // Setup state with initial value (false)
  const [state, setState] = useState(initialVal);
  // When useToggleState is called it will change the initial value to the opposite (true)
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};
export default useToggleState;
