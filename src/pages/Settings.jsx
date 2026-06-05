import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Settings() {
  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Settings</span>
              <h2>Account Settings</h2>
              <p>
                Manage password, preferences and account settings.
              </p>
            </div>

            <div className="dashboard-card">
              <form className="form-grid">
                <div className="form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="form-input"
                  />
                </div>

                <button className="primary-btn">
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Settings;
