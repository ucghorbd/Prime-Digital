import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyJobs() {
  const jobs = [
    {
      id: 1,
      title: "Facebook Follow",
      workers: 10,
      reward: 5,
      status: "Active"
    },
    {
      id: 2,
      title: "YouTube Subscribe",
      workers: 20,
      reward: 10,
      status: "Completed"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>My Jobs</span>
              <h2>Posted Jobs</h2>
              <p>
                Manage and track all the jobs you posted.
              </p>
            </div>

            <div className="dashboard-grid">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="dashboard-card"
                >
                  <h3>{job.title}</h3>

                  <p style={{ marginTop: "10px" }}>
                    Workers: {job.workers}
                  </p>

                  <p>
                    Reward: ৳ {job.reward}
                  </p>

                  <p>
                    Status: {job.status}
                  </p>

                  <button
                    className="primary-btn"
                    style={{ marginTop: "15px" }}
                  >
                    View Details
                  </button>
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

export default MyJobs;
