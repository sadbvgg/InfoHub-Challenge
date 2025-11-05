import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/message")
      .then((res) => setData(res.data.message))
      .catch(() => setData("Error connecting to backend"));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "20%" }}>
      <h1>🚀 InfoHub Challenge</h1>
      <h2>{data}</h2>
    </div>
  );
};

export default App;
