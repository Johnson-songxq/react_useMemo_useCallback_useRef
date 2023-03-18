import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  //   const [rendering, setRendering] = useState(0);
  const render = useRef(1); //{current: any} , current will not lead to re-rendering
  const inputRef = useRef();
  const prevName = useRef();

  useEffect(() => {
    // setRendering((prev) => prev + 1);
    render.current += 1;
  });

  //get the last value of state
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      {/* <div>I have rendered {rendering} times</div> */}
      <div>I have rendered {render.current} times</div>
      <div>My name was {prevName.current}</div>
      <button onClick={() => (inputRef.current.value = "default value")}>
        Focus
      </button>
    </>
  );
};

export default UseRef;
