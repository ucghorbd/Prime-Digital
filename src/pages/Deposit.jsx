import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Deposit() {
  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Deposit</span>
              <h2>Add Balance</h2>
              <p>Submit your deposit request securely.</p>
            </div>

            <div className="dashboard-card">
              <form className="form-grid">
                <div className="form-group">
                  <label>Payment Method</label>
                  <select className="form-input">
                    <option>bKash</option>
                    <option>Nagad</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Sender Number</label>
                  <input
                    type="text"
                    placeholder="01XXXXXXXXX"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Transaction ID</label>
                  <input
                    type="text"
                    placeholder="Enter transaction ID"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Amount</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="form-input"
                  />
                </div>

                <button className="primary-btn">
                  Submit Deposit
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

export default Deposit;
