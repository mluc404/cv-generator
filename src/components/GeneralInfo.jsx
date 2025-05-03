export function GeneralInfo({ data, setData, mode = "input" }) {
  const handleInputChange = (e, index) => {
    const updatedData = [...data];
    updatedData[index].val = e.target.value;
    setData(updatedData);
  };
  return (
    <>
      {/* DISPLAY INPUT */}
      {mode === "input" &&
        data.map((obj, index) => (
          <div key={index} className="infoElement">
            <label htmlFor={obj.name} className="inputLabel">
              {obj.label}
            </label>
            <input
              name={obj.name}
              type={obj.type}
              key={obj.key}
              value={obj.val}
              placeholder={obj.placeholder}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
        ))}

      {/* DISPLAY OUTPUT */}
      {mode === "output" &&
        data.map(
          (obj) =>
            obj.key === "name" && (
              <div className="fullNameDisplay" key={obj.key}>
                {obj.val}
              </div>
            )
        )}
      {mode === "output" && (
        <div className="contactInfo">
          {data
            .filter((obj) => obj.name !== "name")
            .map(
              (each) =>
                //   <p key={each.key} className="output-item" id={each.key}>
                //     {each.val}
                //   </p>
                each.val
            )
            .join(" | ")}
        </div>
      )}
    </>
  );
}
