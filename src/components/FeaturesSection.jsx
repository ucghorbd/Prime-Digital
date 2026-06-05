function FeaturesSection() {
  const features = [
    {
      title: "Referral System",
      text: "Easy referral tracking with clean dashboard-ready structure."
    },
    {
      title: "Mobile Friendly",
      text: "Fully responsive layout for phone, tablet, and desktop."
    },
    {
      title: "Fast Setup",
      text: "Simple structure that is ready for Firebase integration later."
    },
    {
      title: "Modern UI",
      text: "Clean cards, smooth spacing, and premium landing page feel."
    }
  ];

  return (
    <section id="features" className="section section--alt">
      <div className="section__header">
        <p className="section__eyebrow">Features</p>
        <h2 className="section__title">Everything you need in one place</h2>
        <p className="section__subtitle">
          A simple and scalable layout for your business platform.
        </p>
      </div>

      <div className="features">
        {features.map((feature) => (
          <article key={feature.title} className="featureCard">
            <h3 className="featureCard__title">{feature.title}</h3>
            <p className="featureCard__text">{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
