import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import PostJob from "./pages/PostJob";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import EmployerDashboard from "./pages/EmployerDashboard";



function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
        <Route path="/dashboard" element={<EmployerDashboard />} />
        <Route path="/post-job" element={<PostJob />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;