import { useEffect, useMemo, useState } from "react";

const expensiveFunc = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //this way, this expenseive function will be called every time we click the button, i.e. dark changed although number does not change.
  //   const doubleNumber = expensiveFunc(number);

  const doubleNumber = useMemo(() => {
    return expensiveFunc(number);
  }, [number]);

  //every time, the reference of themStyles changes
  //   const themStyles = {
  //     background: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   };

  //this way, only themStyles' reference changes when dark changes
  const themStyles = useMemo(() => {
    return {
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme has changed");
    console.log("themStyles:", themStyles);
  }, [themStyles]); //reference check

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change theme</button>
      <div style={themStyles}>{doubleNumber}</div>
    </>
  );
};

export default UseMemo;
