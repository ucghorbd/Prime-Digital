function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description:
        "Register using email, mobile number, or Google account."
    },
    {
      number: "02",
      title: "Complete Tasks",
      description:
        "Do jobs, referrals, ad views, and other earning activities."
    },
    {
      number: "03",
      title: "Withdraw Earnings",
      description:
        "Withdraw money using bKash or Nagad securely."
    }
  ];

  return (
    <section className="how-section">
      <div className="container">
        <div className="section-header">
          <span>How It Works</span>
          <h2>Start earning in simple steps</h2>
          <p>
            A simple process for users to register, earn and withdraw money.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step) => (
            <div key={step.number} className="how-card">
              <div className="how-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
