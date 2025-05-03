import "../styles/OutputSection.css";
export function OutputSection({ input, sectionType = "general" }) {
  return (
    <>
      {sectionType === "general" &&
        input.map((obj) => (
          <p key={obj.key} className="output-item" id={obj.key}>
            {obj.val}
          </p>
        ))}

      {sectionType === "education" &&
        input.map((obj) => (
          <p key={obj.key} className="output-item" id={obj.key}>
            {obj.val}
          </p>
        ))}
    </>
  );
}
