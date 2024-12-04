import React, { useState } from "react";

function InputHandler() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("輸入的值是：", event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>當前輸入：{value}</p>
    </div>
  );
}

export default InputHandler;