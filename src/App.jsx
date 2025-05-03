import { useState } from "react";
import "./App.css";
import { InputSection } from "./components/InputSection";
import { OutputSection } from "./components/OutputSection";

function App() {
  const [inputGeneralInfo, setInputGeneralInfo] = useState([
    {
      name: "name",
      type: "text",
      key: "name",
      val: "",
      placeholder: "Full Name",
    },
    {
      name: "phone",
      type: "tel",
      key: "phone",
      val: "",
      placeholder: "Phone Number",
    },
    {
      name: "email",
      type: "email",
      key: "email",
      val: "",
      placeholder: "Email",
    },
  ]);

  const [inputEducation, setInputEducation] = useState([
    [
      {
        name: "schoolName",
        type: "text",
        key: "schoolName",
        val: "",
        placeholder: "School Name",
      },
      {
        name: "major",
        type: "text",
        key: "major",
        val: "",
        placeholder: "Major",
      },
      {
        name: "startDate",
        type: "text",
        key: "startDate",
        val: "",
        placeholder: "Start Date",
      },
      {
        name: "endDate",
        type: "text",
        key: "endDate",
        val: "",
        placeholder: "End Date",
      },
    ],
  ]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputGeneralInfo((prev) =>
      prev.map((obj) => (obj.name === name ? { ...obj, val: value } : obj))
    );
  };

  const handleEducationChange = (e, sectionIndex) => {
    const { name, value } = e.target;
    setInputEducation((prev) =>
      prev.map((entry, index) =>
        index === sectionIndex
          ? entry.map((obj) =>
              obj.name === name ? { ...obj, val: value } : obj
            )
          : entry
      )
    );
  };

  const addSchool = () => {
    const newEntry = [
      {
        name: "schoolName",
        type: "text",
        key: "schoolName",
        val: "",
        placeholder: "School Name",
      },
      {
        name: "major",
        type: "text",
        key: "major",
        val: "",
        placeholder: "Major",
      },
      {
        name: "startDate",
        type: "text",
        key: "startDate",
        val: "",
        placeholder: "Start Date",
      },
      {
        name: "endDate",
        type: "text",
        key: "endDate",
        val: "",
        placeholder: "End Date",
      },
    ];
    setInputEducation((prev) => [...prev, newEntry]);
  };

  const removeSchool = () => {
    setInputEducation((prev) => [...prev].toSpliced(prev.length - 1, 1));
  };

  return (
    <>
      <div className="wrapper">
        <div className="inputSection">
          <h4>General Info</h4>
          <InputSection data={inputGeneralInfo} onChange={handleInputChange} />
          <h4>Education</h4>

          {inputEducation.map((entry, index) => (
            <InputSection
              data={entry}
              key={entry[0].val}
              onChange={(e) => handleEducationChange(e, index)}
            />
          ))}

          <div className="buttons">
            <button className="addSchoolButton" onClick={addSchool}>
              +
            </button>
            <button className="removeSchoolButton" onClick={removeSchool}>
              -
            </button>
          </div>
        </div>

        {/* RESUME PREVIEW SECTION */}
        <div className="outputSection">
          <OutputSection input={inputGeneralInfo} />
          {inputEducation.map((entry, index) => (
            <OutputSection input={entry} key={entry[0].val} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
