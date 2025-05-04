import "../styles/Experience.css";

import { sampleData } from "../sampleData";

export function Experience({ data, setData, mode = "input" }) {
  const handleInputChange = (e, index, i) => {
    const updatedData = [...data];
    updatedData[index][i].val = e.target.value;
    setData(updatedData);
  };

  // Functions to add or remove schools
  const newJob = sampleData.newJob;
  const addJob = () => {
    const updatedData = [...data, newJob];
    setData(updatedData);
  };
  const removeJob = () => {
    setData((data) =>
      data.length > 1 ? data.toSpliced(data.length - 1, 1) : data
    );
  };
  return (
    <>
      {/* RENDER INPUT */}
      {mode === "input" && (
        <div className="schoolList">
          {data.map((obj, index) => (
            <div className="school" key={index}>
              {obj.map((each, i) => (
                <div key={i} className="infoElement" id={i}>
                  <label htmlFor={each.name} className="inputLabel">
                    {each.label}
                  </label>
                  {each.name === "description" ? (
                    <textarea
                      name={each.name}
                      type={each.type}
                      key={each.key}
                      value={each.val}
                      placeholder={each.placeholder}
                      onChange={(e) => handleInputChange(e, index, i)}
                    ></textarea>
                  ) : (
                    <input
                      name={each.name}
                      type={each.type}
                      key={each.key}
                      value={each.val}
                      placeholder={each.placeholder}
                      onChange={(e) => handleInputChange(e, index, i)}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
          <div className="buttons">
            <button onClick={addJob}>+</button>
            <button onClick={removeJob}>-</button>
          </div>
        </div>
      )}

      {/* RENDER OUTPUT */}
      {mode === "output" &&
        data.map((obj, index) => (
          <div className="schoolOutput" key={index}>
            <div className="schoolName">
              {obj.map((each, i) => (
                <div key={i} className="infoElement" id={i}>
                  {each.name === "company" ? (
                    <h4>{each.val}</h4>
                  ) : each.name === "position" ? (
                    <p>{each.val}</p>
                  ) : each.name === "location" ? (
                    <p>{each.val}</p>
                  ) : each.name === "description" ? (
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
                    <p>&nbsp;- {each.val}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
}
