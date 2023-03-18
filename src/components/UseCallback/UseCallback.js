import { useCallback, useState } from "react";
import List from "./List";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // this way, every time a new reference of getItem will come out even if when number does not change.
  //   const getItem = () => {
  //     return [number, number + 1, number + 2];
  //   };
  const getItem = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change theme</button>
      <List getItems={getItem} />
    </div>
  );
};

export default UseCallback;
