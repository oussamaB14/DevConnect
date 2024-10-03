import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
//import HomeRoutes from "./routes/HomeRoutes";
import { useEffect } from "react";
import { initFlowbite } from "./utils/flowbite-init";
function App() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <Router>
        <AppRoutes />
        {/* <HomeRoutes /> */}
      </Router>
    </>
  );
}

export default App;
