import { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    //we can access the DOM to manipulate it
    //it not rerender the component like state,
    //but only change the vaule in DOM
    console.log(inputRef.current.value);
    inputRef.current.value = "Hello";
    inputRef.current.style.backgroundColor = "Red";
    paraRef.current.innerText = "Goodbye";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      {/* when click the paragraph, then focus on input text */}
      <p onClick={() => inputRef.current.focus()} ref={paraRef}>
        Hello
      </p>
    </div>
  );
}

export default UseRefExample1;
