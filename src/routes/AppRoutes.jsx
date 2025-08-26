import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Services from "../pages/Services/Services";
import UserDashboardRoute from "../pages/Dashboard/userDashboardRoute";
import UserProfileRoute from "../pages/Profile/ProfileRoutes"
import HelpRoute from "../components/Help/HelpRoute";

/// other pages are imported here ----
import Pricing from "../pages/Other/Pricing";
import PageNotFound from "../pages/Other/PageNotFound";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/user-dashboard/*" element={<UserDashboardRoute />} />
      <Route path="/user-profile/*" element={<UserProfileRoute/>} />
      <Route path="/help" element={<HelpRoute />} />
      
      <Route path="/pricing" element={<Pricing />} />


      <Route path="*" element={<PageNotFound/>} />

    </Routes>
  );
};

export default AppRoutes;
