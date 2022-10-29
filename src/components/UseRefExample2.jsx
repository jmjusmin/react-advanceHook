import { useState, useEffect, useRef } from "react";

function UseRefExample2() {
  // demonstate how to useRef to get the previous state

  //pass in the default vaule
  const renders = useRef(1);
  const prevName = useRef("");
  const [name, setName] = useState("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>Renders : {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type="text"
        vaule={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default UseRefExample2;
