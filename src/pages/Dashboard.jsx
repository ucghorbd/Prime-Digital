import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="dashboard">
        <div className="container">
          <div className="section-header">
            <span>Dashboard</span>
            <h2>Welcome back</h2>
            <p>
              This is a placeholder dashboard shell for your future Firebase
              data, wallet, referral, and admin modules.
            </p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Main Balance</h3>
              <p>৳ 0.00</p>
            </div>

            <div className="dashboard-card">
              <h3>Deposit Balance</h3>
              <p>৳ 0.00</p>
            </div>

            <div className="dashboard-card">
              <h3>Total Referrals</h3>
              <p>0</p>
            </div>

            <div className="dashboard-card">
              <h3>Notifications</h3>
              <p>No new notifications</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;
