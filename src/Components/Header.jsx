import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link to="/">MyLogo</Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-blue-600">Services ▾</button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white border rounded shadow-md mt-2">
                <Link
                  to="Pages/services/DigitalMarketing"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  DigitalMarketing
                </Link>
                <Link
                  to="Pages/services/CarServices"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  CarServices
                </Link>
                <Link
                  to="pages/services/listingproject"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Marketing
                </Link>
                <Link
                  to="Pages/services/salsesupport"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  SalseSupport
                </Link>
              </div>
            )}
          </div>

          <Link to="/blog">Blog</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/about" className="block">
            About
          </Link>
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left"
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="pl-4">
                <Link to="/services/car" className="block">
                  Car
                </Link>
                <Link to="/services/sales" className="block">
                  Sales
                </Link>
                <Link to="/services/marketing" className="block">
                  Marketing
                </Link>
                <Link to="/services/support" className="block">
                  Support
                </Link>
              </div>
            )}
          </div>
          <Link to="/blog" className="block">
            Blog
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
