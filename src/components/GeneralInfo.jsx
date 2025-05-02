import { useState } from "react";
export function GeneralInfo({ data, onChange }) {
  // const arr = [
  //   { name: "name", key: "name", val: "" },
  //   { name: "phone", key: "phone", val: "" },
  // ];

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
