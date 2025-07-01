import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Service from "../Pages/Service";
import DigitalMaketing from "../Pages/services/DigitalMaketing";
import CarServices from "../Pages/services/CarServices";
import ListingProjects from "../Pages/services/ListingProjects";
import SalseSupport from "../Pages/services/SalseSupport";
const AllLinks = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/services/digitalmarketing" element={<Service />} />
        <Route
          path="Pages/services/digitalmarketing"
          element={<DigitalMaketing />}
        />
        <Route path="Pages/services/carservices" element={<CarServices />} />
        <Route
          path="Pages/services/listingproject"
          element={<ListingProjects />}
        />
        <Route path="Pages/services/salsesupport" element={<SalseSupport />} />
      </Routes>
    </>
  );
};

export default AllLinks;
