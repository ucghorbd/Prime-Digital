function EarningCategoriesSection() {
  const categories = [
    {
      title: "Referral Income",
      description: "Earn money by inviting new users with referral codes."
    },
    {
      title: "Job Tasks",
      description: "Complete simple jobs like follow, signup, and social tasks."
    },
    {
      title: "Ad Rewards",
      description: "Watch ads and get rewards based on daily limits."
    },
    {
      title: "Topup Services",
      description: "Order UID topups and digital services easily."
    },
    {
      title: "Online Shop",
      description: "Buy and sell products with listing durations."
    },
    {
      title: "Buy & Sell",
      description: "Post gaming accounts and other digital items."
    }
  ];

  return (
    <section className="earning-section">
      <div className="container">
        <div className="section-header">
          <span>Earning Categories</span>
          <h2>Multiple ways to earn money</h2>
          <p>
            Your platform supports different earning systems for users.
          </p>
        </div>

        <div className="earning-grid">
          {categories.map((item) => (
            <div key={item.title} className="earning-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EarningCategoriesSection;
