function CTASection() {
  return (
    <section className="section cta">
      <div className="cta__box">
        <p className="section__eyebrow">Get Started</p>
        <h2 className="section__title">Ready to launch your website?</h2>
        <p className="section__subtitle">
          Replace the demo text, add your logo, and connect Firebase later.
        </p>

        <div className="hero__actions">
          <a href="/register" className="btn btn--primary">
            Register Now
          </a>
          <a href="/login" className="btn btn--secondary">
            Login
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
