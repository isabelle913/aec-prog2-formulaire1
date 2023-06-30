import React from "react";

import BsInput from "react-bootstrap/FormControl";

const Input = ({
  id,
  value,
  onChange,
  type = "text",
  placeholder,
  ...rest
}) => {
  const handleChange = (event) => {
    const value = event.target.value;

    //console.log("handleChange", value, id);
    onChange(value, id);
  };

  return (
    <BsInput
      id={id}
      value={value}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
