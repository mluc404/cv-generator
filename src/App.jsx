import { useState } from "react";

import { sampleData } from "./sampleData";
import { PersonalInfo } from "./components/PersonalInfo";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

import "./App.css";
import "./styles/InputSection.css";

function App() {
  const [inputPersonalInfo, setInputPersonalInfo] = useState(
    sampleData.personalInfo
  );
  const [inputEducation, setInputEducation] = useState(sampleData.education);
  const [inputExperience, setInputExperience] = useState(sampleData.experience);

  return (
    <>
      <div className="wrapper">
        <div className="inputSection">
          <div className="inputBlock personalInfoInput">
            <h2>Personal Details</h2>
            <PersonalInfo
              data={inputPersonalInfo}
              setData={setInputPersonalInfo}
            />
          </div>
          <div className="inputBlock educationInput">
            <h2>Education</h2>
            <Education data={inputEducation} setData={setInputEducation} />
          </div>
          <div className="inputBlock experienceInput">
            <h2>Experience</h2>
            <Experience data={inputExperience} setData={setInputExperience} />
          </div>
        </div>

        {/* >>>>>>>>>>>>>> OUTPUT SECTION <<<<<<<<<<<<<<<<< */}
        <div className="outputSection">
          <div className="personalInfoOutput">
            <PersonalInfo data={inputPersonalInfo} mode="output" />
          </div>
          <div className="detailedInfoOutput">
            <div className="educationOutput">
              <h3>Education</h3>
              <Education data={inputEducation} mode="output" />
            </div>
            <div className="experienceOutput">
              <h3>Experience</h3>
              <Experience data={inputExperience} mode="output" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
