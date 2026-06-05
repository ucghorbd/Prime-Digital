function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__badge">Welcome to Prime Digital</p>

        <h1 className="hero__title">
          Build a modern earning platform with a clean, responsive design
        </h1>

        <p className="hero__subtitle">
          A premium landing page structure with strong UI, simple navigation,
          and future Firebase-ready architecture.
        </p>

        <div className="hero__actions">
          <a href="/register" className="btn btn--primary">
            Get Started
          </a>
          <a href="/login" className="btn btn--secondary">
            Login
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>24/7</strong>
            <span>Support</span>
          </div>
          <div className="hero__stat">
            <strong>100%</strong>
            <span>Responsive</span>
          </div>
          <div className="hero__stat">
            <strong>Fast</strong>
            <span>Performance</span>
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__card hero__card--top">
          <span className="hero__cardLabel">Today</span>
          <h3 className="hero__cardTitle">New users joined</h3>
          <p className="hero__cardText">Track growth from one clean dashboard.</p>
        </div>

        <div className="hero__imageWrap">
          <img
            src="/assets/images/hero-banner.jpg"
            alt="Prime Digital Hero"
            className="hero__image"
          />
        </div>

        <div className="hero__card hero__card--bottom">
          <span className="hero__cardLabel">Earnings</span>
          <h3 className="hero__cardTitle">Balance overview</h3>
          <p className="hero__cardText">Show deposit, main balance and rewards.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
