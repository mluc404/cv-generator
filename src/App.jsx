import { useState, useRef, use } from "react";
import { useReactToPrint } from "react-to-print";

import { sampleData } from "./sampleData";
import { PersonalInfo } from "./components/PersonalInfo";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

import githubLogo from "./assets/github-mark.png";

import "./App.css";
import "./styles/InputSection.css";

function App() {
  const [inputPersonalInfo, setInputPersonalInfo] = useState(
    sampleData.personalInfo
  );
  const [inputEducation, setInputEducation] = useState(sampleData.education);
  const [inputExperience, setInputExperience] = useState(sampleData.experience);

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <>
      <div className="wrapper">
        <div className="inputSection">
          <div className="inputBlock personalInfoInput">
            <div className="inputSectionHeader">
              <div className="inputIcon"> &#x1F464;</div>
              <h2>Personal Details</h2>
            </div>
            <PersonalInfo
              data={inputPersonalInfo}
              setData={setInputPersonalInfo}
            />
          </div>
          <div className="inputBlock educationInput">
            <div className="inputSectionHeader">
              <div className="inputIcon">&#x1F393; </div>
              <h2>Education</h2>
            </div>

            <Education data={inputEducation} setData={setInputEducation} />
          </div>
          <div className="inputBlock experienceInput">
            <div className="inputSectionHeader">
              <div className="inputIcon">&#x1F4BC;</div>
              <h2>Experience</h2>
            </div>
            <Experience data={inputExperience} setData={setInputExperience} />
          </div>
          {/* Print resume */}
          <div className="outputButtons">
            <button onClick={reactToPrintFn} className="printBtn">
              &#x1F5A8;
            </button>
            <div className="githubLink">
              <a
                href="https://github.com/mluc404/cv-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubLogo}
                  alt="GitHub logo"
                  className="githubLogo"
                />
                {/* <span>mluc404</span> */}
              </a>
            </div>
          </div>
        </div>

        {/* >>>>>>>>>>>>>> OUTPUT SECTION <<<<<<<<<<<<<<<<< */}
        <div className="outputSection" ref={contentRef}>
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
