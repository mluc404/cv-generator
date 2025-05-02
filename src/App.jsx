import { useState } from "react";
import "./App.css";
import { GeneralInfo } from "./components/GeneralInfo";

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
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputGeneralInfo((prev) =>
      prev.map((obj) => (obj.name === name ? { ...obj, val: value } : obj))
    );
  };

  return (
    <>
      <div className="wrapper">
        <div className="inputSection">
          <GeneralInfo data={inputGeneralInfo} onChange={handleInputChange} />
        </div>
        <div className="outputSection"></div>
      </div>
    </>
  );
}

export default App;
