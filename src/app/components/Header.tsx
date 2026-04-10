import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "../../assets/3b23d07670f3706cb900d404f3a190083d17927c.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-0.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center -my-1.5">
            <img
              src={logoImage}
              alt="Glam Hair & Skin"
              className="h-20 md:h-32 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-[#B8860B] font-semibold"
                  : "text-[#6B4E3D] hover:text-[#B8860B]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                isActive("/services")
                  ? "text-[#B8860B] font-semibold"
                  : "text-[#6B4E3D] hover:text-[#B8860B]"
              }`}
            >
              Services
            </Link>
            <Link
              to="/appointment"
              className="bg-[#F5E6D3] text-[#6B4E3D] px-6 py-2 rounded-full hover:bg-[#EBD9C5] transition-colors font-semibold"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#6B4E3D]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-[#B8860B] font-semibold"
                  : "text-[#6B4E3D] hover:text-[#B8860B]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                isActive("/services")
                  ? "text-[#B8860B] font-semibold"
                  : "text-[#6B4E3D] hover:text-[#B8860B]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/appointment"
              className="bg-[#B8860B] text-white px-6 py-2 rounded-full hover:bg-[#A67C52] transition-colors font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}