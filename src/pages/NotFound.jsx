import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="notfound">
      <div className="container">
        <div className="notfound__box">
          <p className="hero__badge">404</p>
          <h1 className="hero__title">Page not found</h1>
          <p className="hero__subtitle">
            The page you are looking for does not exist.
          </p>

          <div className="hero__actions">
            <Link to="/" className="btn btn--primary">
              Go Home
            </Link>
            <Link to="/login" className="btn btn--secondary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
