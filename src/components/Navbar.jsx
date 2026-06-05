import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          Prime Digital
        </Link>

        <nav className="navbar__desktop">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="navbar__link">
              {item.label}
            </a>
          ))}
          <Link to="/login" className="navbar__btn">
            Login
          </Link>
        </nav>

        <button
          type="button"
          className="navbar__menuBtn"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar__mobileLink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/login"
            className="navbar__mobileLink"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
