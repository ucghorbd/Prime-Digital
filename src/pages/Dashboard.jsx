import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  const cards = [
    { title: "Main Balance", value: "৳ 0.00" },
    { title: "Deposit Balance", value: "৳ 0.00" },
    { title: "Total Referrals", value: "0" },
    { title: "Active Status", value: "Inactive" }
  ];

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Dashboard</span>
              <h2>Welcome back</h2>
              <p>
                This is a clean starter dashboard shell for future Firebase
                integration, wallet data, referral data, and admin modules.
              </p>
            </div>

            <div className="dashboard-grid">
              {cards.map((card) => (
                <article key={card.title} className="dashboard-card">
                  <h3>{card.title}</h3>
                  <p>{card.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;
