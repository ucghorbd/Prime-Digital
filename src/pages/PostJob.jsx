import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PostJob() {
  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Post Job</span>
              <h2>Create a New Job</h2>
              <p>
                Post your own task and let workers complete it.
              </p>
            </div>

            <div className="dashboard-card">
              <form className="form-grid">
                <div className="form-group">
                  <label>Job Title</label>
                  <input
                    type="text"
                    placeholder="Enter job title"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <select className="form-input">
                    <option>Facebook Follow</option>
                    <option>YouTube Subscribe</option>
                    <option>Telegram Join</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Reward Per Task</label>
                  <input
                    type="number"
                    placeholder="Enter reward amount"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Worker Limit</label>
                  <input
                    type="number"
                    placeholder="Enter worker limit"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Task Link</label>
                  <input
                    type="text"
                    placeholder="Paste task link"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Instructions</label>
                  <textarea
                    placeholder="Write instructions"
                    className="form-input"
                    rows="5"
                  />
                </div>

                <button className="primary-btn">
                  Submit Job
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

export default PostJob;
