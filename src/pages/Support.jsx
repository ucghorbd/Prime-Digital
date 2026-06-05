import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Support() {
  const supports = [
    {
      id: 1,
      title: "Telegram Channel",
      link: "https://t.me/yourchannel"
    },
    {
      id: 2,
      title: "Telegram Support",
      link: "https://t.me/yoursupport"
    },
    {
      id: 3,
      title: "WhatsApp Group",
      link: "https://chat.whatsapp.com/yourgroup"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Support</span>
              <h2>Get Help & Join Community</h2>
              <p>
                Contact support or join our community groups.
              </p>
            </div>

            <div className="dashboard-grid">
              {supports.map((item) => (
                <div
                  key={item.id}
                  className="dashboard-card"
                >
                  <h3>{item.title}</h3>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-btn"
                    style={{
                      marginTop: "15px",
                      display: "inline-block",
                      textDecoration: "none"
                    }}
                  >
                    Open Link
                  </a>
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

export default Support;
