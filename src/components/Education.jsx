import "../styles/Education.css";

export function Education({ data, setData, mode = "input" }) {
  const handleInputChange = (e, index, i) => {
    const updatedData = [...data];
    updatedData[index][i].val = e.target.value;
    setData(updatedData);
  };
  return (
    <>
      {/* DISPLAY INPUT */}
      {mode === "input" &&
        data.map((obj, index) => (
          <div className="school" key={index}>
            {obj.map((each, i) => (
              <div key={i} className="infoElement" id={i}>
                <label htmlFor={each.name} className="inputLabel">
                  {each.label}
                </label>
                <input
                  name={each.name}
                  type={each.type}
                  key={each.key}
                  value={each.val}
                  placeholder={each.placeholder}
                  onChange={(e) => handleInputChange(e, index, i)}
                />
              </div>
            ))}
          </div>
        ))}

      {/* DISPLAY OUTPUT */}
      {mode === "output" &&
        data.map((obj, index) => (
          <div className="schoolOutput" key={index}>
            <div className="schoolName">
              {obj.map((each, i) => (
                <div key={i} className="infoElement" id={i}>
                  {each.name === "schoolName" ? (
                    <h4>{each.val}</h4>
                  ) : each.name === "degree" ? (
                    <p>{each.val}</p>
                  ) : each.name === "location" ? (
                    <p>{each.val}</p>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="schoolDate">
              {obj.map((each, i) => (
                <div key={i} className="infoElement" id={i}>
                  {each.name === "startDate" ? (
                    <p>{each.val}</p>
                  ) : each.name === "endDate" ? (
                    <p> - {each.val}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
}
