import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TopupOrder() {
  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Topup Order</span>
              <h2>Place Your Order</h2>
              <p>
                Enter your UID and confirm topup purchase.
              </p>
            </div>

            <div className="dashboard-card">
              <form className="form-grid">
                <div className="form-group">
                  <label>Game UID</label>
                  <input
                    type="text"
                    placeholder="Enter your UID"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Select Package</label>
                  <select className="form-input">
                    <option>850 Diamond</option>
                    <option>Weekly Membership</option>
                    <option>UC Package</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Payment Wallet</label>
                  <select className="form-input">
                    <option>Main Balance</option>
                    <option>Deposit Balance</option>
                  </select>
                </div>

                <button className="primary-btn">
                  Confirm Order
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

export default TopupOrder;
