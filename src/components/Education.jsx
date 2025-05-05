import "../styles/Education.css";
import { sampleData } from "../sampleData";

export function Education({ data, setData, mode = "input" }) {
  const handleInputChange = (e, index, i) => {
    const updatedData = [...data];
    updatedData[index][i].val = e.target.value;
    setData(updatedData);
  };

  // Functions to add or remove schools
  const newSchool = sampleData.newSchool;
  const addSchool = () => {
    const updatedData = [...data, newSchool];
    setData(updatedData);
  };
  const removeSchool = () => {
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
          <div className="buttons">
            <button onClick={addSchool}>+</button>
            <button onClick={removeSchool}>-</button>
          </div>
        </div>
      )}

      {/* RENDER OUTPUT */}
      {/* {mode === "output" &&
        data.map((obj, index) => (
          <div className="schoolOutput" key={index}>
            <div className="schoolName">
              {obj.map((each, i) => (
                <>
                  {each.name === "schoolName" ? (
                    <h4>{each.val}</h4>
                  ) : each.name === "degree" ? (
                    <p>{each.val}</p>
                  ) : each.name === "location" ? (
                    <p>{each.val}</p>
                  ) : null}
                </>
              ))}
            </div>
            <div className="schoolDate">
              {obj.map((each, i) => (
                <>
                  {each.name === "startDate" ? (
                    <p>{each.val}</p>
                  ) : each.name === "endDate" ? (
                    <p>&nbsp;- {each.val}</p>
                  ) : null}
                </>
              ))}
            </div>
          </div>
        ))} */}
      {/* //////////////////////////////////////// */}
      {/* //////////////////////////////////////// */}
      {/* //////////////////////////////////////// */}
      {/* REFACTOR RENDER OUTPUT */}
      {mode === "output" && (
        <div className="schoolOutput">
          {data.map((obj, index) => {
            const schoolNameDegree = obj.filter(
              (item) => item.name === "schoolName" || item.name === "degree"
            );
            console.log(schoolNameDegree);

            const schoolDate = obj.filter(
              (item) => item.name === "startDate" || item.name === "endDate"
            );
            const schoolLoc = obj.filter((item) => item.name === "location");

            return (
              <div className="schoolUnit">
                <div className="schoolLeftPart">
                  {schoolNameDegree.map((each, i) =>
                    each.name === "schoolName" ? (
                      <h4>{each.val}</h4>
                    ) : (
                      <p>{each.val}</p>
                    )
                  )}
                </div>

                <div className="schoolRightPart">
                  <div className="schoolDate">
                    {schoolDate.map((each, i) =>
                      each.name === "startDate" ? (
                        <p>{each.val}</p>
                      ) : (
                        <p>&nbsp;- {each.val}</p>
                      )
                    )}
                  </div>
                  <div className="schoolLoc">
                    {schoolLoc.map((each, i) => (
                      <p>{each.val}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
