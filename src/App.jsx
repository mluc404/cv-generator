import { useState } from "react";
import "./App.css";
// import { InputSection } from "./components/InputSection";
import { OutputSection } from "./components/OutputSection";
import "./styles/InputSection.css";

// function App() {
//   // 9:18pm working on OutputSection.jsx to display each section differently
//   const [inputGeneralInfo, setInputGeneralInfo] = useState([
//     {
//       name: "name",
//       type: "text",
//       key: "name",
//       val: "",
//       placeholder: "Full Name",
//     },
//     {
//       name: "phone",
//       type: "tel",
//       key: "phone",
//       val: "",
//       placeholder: "Phone Number",
//     },
//     {
//       name: "email",
//       type: "email",
//       key: "email",
//       val: "",
//       placeholder: "Email",
//     },
//   ]);

//   const [inputEducation, setInputEducation] = useState([
//     [
//       {
//         name: "schoolName",
//         type: "text",
//         key: "schoolName",
//         val: "",
//         placeholder: "School Name",
//       },
//       {
//         name: "major",
//         type: "text",
//         key: "major",
//         val: "",
//         placeholder: "Major",
//       },
//       {
//         name: "startDate",
//         type: "text",
//         key: "startDate",
//         val: "",
//         placeholder: "Start Date",
//       },
//       {
//         name: "endDate",
//         type: "text",
//         key: "endDate",
//         val: "",
//         placeholder: "End Date",
//       },
//     ],
//   ]);
//   const handleGeneralInfoChange = (e) => {
//     const { name, value } = e.target;
//     setInputGeneralInfo((prev) =>
//       prev.map((obj) => (obj.name === name ? { ...obj, val: value } : obj))
//     );
//   };

//   const handleEducationChange = (e, sectionIndex) => {
//     const { name, value } = e.target;
//     setInputEducation((prev) =>
//       prev.map((entry, index) =>
//         index === sectionIndex
//           ? entry.map((obj) =>
//               obj.name === name ? { ...obj, val: value } : obj
//             )
//           : entry
//       )
//     );
//   };

//   const addSchool = () => {
//     const newEntry = [
//       {
//         name: "schoolName",
//         type: "text",
//         key: "schoolName",
//         val: "",
//         placeholder: "School Name",
//       },
//       {
//         name: "major",
//         type: "text",
//         key: "major",
//         val: "",
//         placeholder: "Major",
//       },
//       {
//         name: "startDate",
//         type: "text",
//         key: "startDate",
//         val: "",
//         placeholder: "Start Date",
//       },
//       {
//         name: "endDate",
//         type: "text",
//         key: "endDate",
//         val: "",
//         placeholder: "End Date",
//       },
//     ];
//     setInputEducation((prev) => [...prev, newEntry]);
//   };

//   const removeSchool = () => {
//     setInputEducation((prev) =>
//       prev.length > 1 ? [...prev].toSpliced(prev.length - 1, 1) : prev
//     );
//   };

//   return (
//     <>
//       <div className="wrapper">
//         <div className="inputSection">
//           <h4>General Info</h4>
//           <InputSection
//             data={inputGeneralInfo}
//             onChange={handleGeneralInfoChange}
//           />
//           <h4>Education</h4>
//           {inputEducation.map((entry, index) => (
//             <InputSection
//               data={entry}
//               key={index}
//               onChange={(e) => handleEducationChange(e, index)}
//             />
//           ))}

//           <div className="buttons">
//             <button className="addSchoolButton" onClick={addSchool}>
//               +
//             </button>
//             <button className="removeSchoolButton" onClick={removeSchool}>
//               -
//             </button>
//           </div>
//         </div>

//         {/* RESUME OUTPUT SECTION */}
//         <div className="outputSection">
//           <div className="generalInfo-output">
//             <OutputSection input={inputGeneralInfo} />
//           </div>
//           <div className="education-output">
//             {inputEducation.map((entry, index) => (
//               <OutputSection
//                 input={entry}
//                 key={index}
//                 sectionType="education"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { GeneralInfo } from "./components/GeneralInfo";

function App() {
  const [inputGeneralInfo, setInputGeneralInfo] = useState([
    {
      name: "name",
      type: "text",
      key: "name",
      val: "Minh",
      placeholder: "Enter Your Name",
      label: "Full Name",
    },
    {
      name: "phone",
      type: "tel",
      key: "phone",
      val: "(123) 456-7890",
      placeholder: "Enter Phone Number",
      label: "Phone Number",
    },
    {
      name: "email",
      type: "email",
      key: "email",
      val: "myEmail@gmail.com",
      placeholder: "Enter Email",
      label: "Email",
    },
    {
      name: "location",
      type: "text",
      key: "location",
      val: "San Diego, CA",
      placeholder: "Enter Your Location",
      label: "Location",
    },
  ]);
  return (
    <>
      <div className="wrapper">
        <div className="inputSection">
          <div className="generalInfoInput">
            <GeneralInfo
              data={inputGeneralInfo}
              setData={setInputGeneralInfo}
            />
          </div>
        </div>
        <div className="outputSection">
          <div className="generalInfoOutput">
            <GeneralInfo data={inputGeneralInfo} mode="output" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
