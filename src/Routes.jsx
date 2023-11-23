import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/Home";
import Signup from "./pages/Signup";
import Navbar from './components/Navbar';
import Scholarship from "./pages/Scholarship";
const ProjectRoutes = () => {
    const backend_uri = process.env.REACT_APP_B_HOST
    const [scholarships, setscholarships] = useState([]);
    const getScholarships=async(data)=>{
      const responose = fetch(`http://${backend_uri}/getScholarship`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({data:data})
    }
      ).then((res)=>res.json()).then((res)=>{setscholarships(res["D1"]);console.log(res["D1"])})
    }
    return (
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/scholarship-signup" element={<Signup getScholarships={getScholarships}/>} />
            <Route exact path="/scholarship-result" element={<Scholarship />} />
          </Routes>
        </Router>
      </React.Suspense>
    );
  };
  export default ProjectRoutes;