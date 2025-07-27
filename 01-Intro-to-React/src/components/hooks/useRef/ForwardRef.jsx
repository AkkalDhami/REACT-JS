import React, {  useRef } from "react";

const ForwardRef = () => {
  const name = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value, password.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <BeforeReact19 label="name" type="text" ref={name} />
      <br />
      <BeforeReact19 label="password" type="password" ref={password} />
      <br />
      <button type="submit" className="p-2 border">Submit</button>
    </form>
  );
};

const BeforeReact19 = (props) => {
  
  return (
    <div>
      <label htmlFor={props.label}></label>
      <input
        type={props.type}
        name={props.label}
        ref={props.ref}
        className="p-2 border"
      />
    </div>
  );
};

export default ForwardRef;
