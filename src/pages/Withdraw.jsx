import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Withdraw() {
  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Withdraw</span>
              <h2>Withdraw Money</h2>
              <p>Select method and request your withdrawal.</p>
            </div>

            <div className="dashboard-card">
              <form className="form-grid">
                <div className="form-group">
                  <label>Method</label>
                  <select className="form-input">
                    <option>bKash</option>
                    <option>Nagad</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Account Number</label>
                  <input
                    type="text"
                    placeholder="01XXXXXXXXX"
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
                  Request Withdraw
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

export default Withdraw;
