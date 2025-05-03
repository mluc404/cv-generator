import { useState } from "react";
export function InputSection({ data, onChange }) {
  return (
    <>
      {data.map((obj) => (
        <input
          type={obj.type}
          key={obj.key}
          name={obj.name}
          value={obj.val}
          onChange={onChange}
          placeholder={obj.placeholder}
        ></input>
      ))}
    </>
  );
}
