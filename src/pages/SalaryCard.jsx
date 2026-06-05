import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SalaryCard() {
  const cards = [
    {
      id: 1,
      referrals: 10,
      amount: 300,
      days: 7
    },
    {
      id: 2,
      referrals: 25,
      amount: 1000,
      days: 15
    },
    {
      id: 3,
      referrals: 50,
      amount: 2500,
      days: 30
    }
  ];

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Salary Card</span>
              <h2>Claim Salary Rewards</h2>
              <p>
                Unlock salary cards based on referrals.
              </p>
            </div>

            <div className="dashboard-grid">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="dashboard-card"
                >
                  <h3>{card.referrals} Referrals</h3>

                  <p style={{ marginTop: "10px" }}>
                    Reward: ৳ {card.amount}
                  </p>

                  <p>
                    Holding Days: {card.days}
                  </p>

                  <button
                    className="primary-btn"
                    style={{ marginTop: "15px" }}
                  >
                    Claim Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SalaryCard;
