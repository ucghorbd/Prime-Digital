import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>My Profile</span>
              <h2>Account Information</h2>
              <p>
                Your profile information will appear here after Firebase
                integration.
              </p>
            </div>

            <div className="dashboard-card" style={{ maxWidth: "600px" }}>
              <h3>Full Name</h3>
              <p>Guest User</p>

              <br />

              <h3>Email</h3>
              <p>example@gmail.com</p>

              <br />

              <h3>Mobile Number</h3>
              <p>01XXXXXXXXX</p>

              <br />

              <h3>Referral Code</h3>
              <p>PRIME2026</p>

              <br />

              <h3>Status</h3>
              <p>Inactive</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Profile;
