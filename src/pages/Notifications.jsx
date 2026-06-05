import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Referral Bonus Added",
      message: "You received ৳20 referral bonus.",
      date: "05 Jun 2026"
    },
    {
      id: 2,
      title: "Withdraw Approved",
      message: "Your withdraw request has been approved.",
      date: "04 Jun 2026"
    },
    {
      id: 3,
      title: "Job Completed",
      message: "Your submitted task has been approved.",
      date: "03 Jun 2026"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Notifications</span>
              <h2>All Notifications</h2>
              <p>
                Stay updated with your account activity.
              </p>
            </div>

            <div className="dashboard-grid">
              {notifications.map((item) => (
                <div
                  key={item.id}
                  className="dashboard-card"
                >
                  <h3>{item.title}</h3>

                  <p style={{ marginTop: "10px" }}>
                    {item.message}
                  </p>

                  <small
                    style={{
                      display: "block",
                      marginTop: "15px",
                      opacity: 0.7
                    }}
                  >
                    {item.date}
                  </small>
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

export default Notifications;
