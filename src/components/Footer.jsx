import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <h3 className="footer__logo">Prime Digital</h3>
          <p className="footer__text">
            A modern responsive frontend starter for your platform.
          </p>
        </div>

        <div className="footer__links">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/login" className="footer__link">Login</Link>
          <Link to="/register" className="footer__link">Register</Link>
          <Link to="/reset-password" className="footer__link">Reset Password</Link>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Prime Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
