import "../styles/PersonalInfo.css";
export function PersonalInfo({ data, setData, mode = "input" }) {
  const handleInputChange = (e, index) => {
    const updatedData = [...data];
    updatedData[index].val = e.target.value;
    setData(updatedData);
  };

  const fullName = data.find((item) => item.name === "name");
  const contact = data.filter((item) =>
    ["phone", "email", "website"].includes(item.name)
  );

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

      {/*OUTPUT RENDER */}
      {mode === "output" && (
        <>
          <div className="fullNameDisplay">
            {fullName && <h4>{fullName.val}</h4>}
          </div>
          <div className="contactInfo">
            {contact.map((item, i) =>
              item.name === "website" ? (
                <a
                  href={`https://${item.val}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.val}
                </a>
              ) : (
                <p>{item.val}&nbsp;|&nbsp;</p>
              )
            )}
          </div>
        </>
      )}
    </>
  );
}
