import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useActiveSection from "../../hooks/useActiveSection";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeSection = useActiveSection();

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-lg
      bg-black/30
      border-b
      border-gray-800"
    >
      {/* Main Navbar */}

      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex justify-between items-center">

        <h1 className="font-bold text-xl md:text-2xl text-green-400">
          Alok Kumar
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-green-400"
                    : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Dropdown */}

      {menuOpen && (
        <div
          className="
          md:hidden
          bg-[#111827]
          border-t
          border-white/10"
        >
          <ul className="flex flex-col items-center py-6 gap-6">

            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    activeSection === link.id
                      ? "text-green-400"
                      : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}

          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;