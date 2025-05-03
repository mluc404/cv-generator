import { useState } from "react";
import "./App.css";
import { GeneralInfo } from "./components/GeneralInfo";
import { ResumePreview } from "./components/ResumePreview";

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
  ]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputGeneralInfo((prev) =>
      prev.map((obj) => (obj.name === name ? { ...obj, val: value } : obj))
    );
    setInputEducation((prev) =>
      prev.map((obj) => (obj.name === name ? { ...obj, val: value } : obj))
    );
  };

  return (
    <>
      <div className="wrapper">
        <div className="inputSection">
          <h4>General Info</h4>
          <GeneralInfo data={inputGeneralInfo} onChange={handleInputChange} />
          <h4>Education</h4>
          <GeneralInfo data={inputEducation} onChange={handleInputChange} />
          <button
            className="addSchoolButton"
            onClick={() => (
              console.log("here"),
              (
                <GeneralInfo
                  data={inputEducation}
                  onChange={handleInputChange}
                />
              )
            )}
          >
            +
          </button>
        </div>

        {/* RESUME PREVIEW SECTION */}
        <div className="outputSection">
          <ResumePreview input={inputGeneralInfo} />
          <ResumePreview input={inputEducation} />
        </div>
      </div>
    </>
  );
}

export default App;
