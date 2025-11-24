import { useState } from "react";
import { analyzeCode } from "../../services/analysisApi";

export const FileUpload = () => {
  const [code, setCode] = useState("");

  const handleSubmit = async () => {
    const response = await analyzeCode(code);
    console.log(response);
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste C# code here"
      />
      <button onClick={handleSubmit}>Analyze</button>
    </div>
  );
};
