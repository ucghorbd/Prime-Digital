import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          Prime Digital
        </Link>

        <nav style={styles.desktopNav}>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#testimonials" style={styles.navLink}>Testimonials</a>
          <a href="#faq" style={styles.navLink}>FAQ</a>
          <Link to="/login" style={styles.loginBtn}>Login</Link>
        </nav>

        <button onClick={toggleMenu} style={styles.menuBtn} aria-label="Toggle menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div style={styles.mobileMenu}>
          <a href="#features" style={styles.mobileLink} onClick={() => setOpen(false)}>Features</a>
          <a href="#testimonials" style={styles.mobileLink} onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#faq" style={styles.mobileLink} onClick={() => setOpen(false)}>FAQ</a>
          <Link to="/login" style={styles.mobileLink} onClick={() => setOpen(false)}>Login</Link>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(15, 17, 21, 0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    fontSize: 20,
    fontWeight: 700,
    color: "#ffffff"
  },
  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: 24
  },
  navLink: {
    color: "#d6dbe4",
    fontSize: 15
  },
  loginBtn: {
    background: "#ffffff",
    color: "#0f1115",
    padding: "10px 18px",
    borderRadius: 999,
    fontWeight: 600
  },
  menuBtn: {
    display: "none",
    background: "transparent",
    border: "none",
    color: "#ffffff",
    cursor: "pointer"
  },
  mobileMenu: {
    display: "none",
    padding: "12px 20px 18px",
    borderTop: "1px solid rgba(255,255,255,0.08)"
  },
  mobileLink: {
    display: "block",
    padding: "12px 0",
    color: "#d6dbe4",
    fontSize: 16
  }
};

export default Navbar;
