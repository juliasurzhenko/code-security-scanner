import React, { useState } from "react";
import { analyzeCode } from "./services/analysisApi";

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    try {
      const response = await analyzeCode(code);
      setResult(response);
    } catch (err) {
      console.error(err);
      setResult({ error: "Failed to analyze code." });
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Code Security Scanner</h1>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your C# code here..."
        style={{
          width: "100%",
          height: "250px",
          fontSize: "14px",
          padding: "10px",
          borderRadius: "8px",
        }}
      />

      <button
        onClick={handleAnalyze}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Analyze
      </button>

      {result && (
        <pre
          style={{
            background: "#f4f4f4",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
