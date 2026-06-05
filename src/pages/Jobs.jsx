import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Facebook Follow",
      reward: 10,
      image:
        "https://cdn-icons-png.flaticon.com/512/733/733547.png"
    },
    {
      id: 2,
      title: "YouTube Subscribe",
      reward: 15,
      image:
        "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
    },
    {
      id: 3,
      title: "Telegram Join",
      reward: 8,
      image:
        "https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Jobs</span>
              <h2>Available Tasks</h2>
              <p>Complete tasks and earn rewards instantly.</p>
            </div>

            <div className="dashboard-grid">
              {jobs.map((job) => (
                <div key={job.id} className="dashboard-card">
                  <img
                    src={job.image}
                    alt={job.title}
                    style={{
                      width: "60px",
                      marginBottom: "15px"
                    }}
                  />

                  <h3>{job.title}</h3>

                  <p style={{ marginTop: "10px" }}>
                    Reward: ৳ {job.reward}
                  </p>

                  <button
                    className="primary-btn"
                    style={{ marginTop: "15px" }}
                  >
                    Start Job
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

export default Jobs;
