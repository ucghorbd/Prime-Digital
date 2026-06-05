import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Referral() {
  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Referral System</span>
              <h2>Invite & Earn</h2>
              <p>
                Share your referral code and earn rewards when users join and
                get verified.
              </p>
            </div>

            <div className="dashboard-grid">
              <div className="dashboard-card">
                <h3>Referral Code</h3>
                <p>PRIME2026</p>
              </div>

              <div className="dashboard-card">
                <h3>Total Referrals</h3>
                <p>0</p>
              </div>

              <div className="dashboard-card">
                <h3>Verified Referrals</h3>
                <p>0</p>
              </div>

              <div className="dashboard-card">
                <h3>Total Income</h3>
                <p>৳ 0</p>
              </div>
            </div>

            <div
              className="dashboard-card"
              style={{ marginTop: "30px" }}
            >
              <h3>Your Referral Link</h3>

              <p style={{ marginTop: "10px" }}>
                https://yourdomain.com/register?ref=PRIME2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Referral;
