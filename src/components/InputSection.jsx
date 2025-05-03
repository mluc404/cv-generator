import "../styles/InputSection.css";
export function InputSection({ data, onChange }) {
  return (
    <>
      {data.map((obj, index) => (
        <input
          type={obj.type}
          key={obj.key}
          // key={index}
          name={obj.name}
          value={obj.val}
          onChange={onChange}
          placeholder={obj.placeholder}
        />
      ))}
    </>
  );
}
