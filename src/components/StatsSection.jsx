function StatsSection() {
  const stats = [
    { value: "10K+", label: "Happy Users" },
    { value: "500+", label: "Active Referrals" },
    { value: "99%", label: "Uptime Ready" }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
