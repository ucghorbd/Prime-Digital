import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function JobDetails() {
  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Job Details</span>
              <h2>Complete Your Task</h2>
              <p>
                Follow instructions carefully and submit proof to get paid.
              </p>
            </div>

            <div className="dashboard-card">
              <h3>Facebook Follow</h3>

              <p style={{ marginTop: "15px" }}>
                Reward: <strong>৳ 10</strong>
              </p>

              <p style={{ marginTop: "15px" }}>
                Step 1: Open the task link.
              </p>

              <p>Step 2: Complete the required action.</p>

              <p>Step 3: Submit proof below.</p>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  textDecoration: "none"
                }}
              >
                Open Task
              </a>

              <div style={{ marginTop: "30px" }}>
                <label>Proof Link / Screenshot URL</label>

                <input
                  type="text"
                  placeholder="Paste proof link"
                  className="form-input"
                  style={{ marginTop: "10px" }}
                />

                <button
                  className="primary-btn"
                  style={{ marginTop: "20px" }}
                >
                  Submit Proof
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default JobDetails;
