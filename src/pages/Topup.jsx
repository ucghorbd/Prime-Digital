import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Topup() {
  const packages = [
    {
      id: 1,
      title: "850 Diamond",
      game: "Free Fire",
      price: 850
    },
    {
      id: 2,
      title: "Weekly Membership",
      game: "Free Fire",
      price: 180
    },
    {
      id: 3,
      title: "UC Package",
      game: "PUBG",
      price: 600
    }
  ];

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Game Topup</span>
              <h2>Buy Topup Packages</h2>
              <p>
                Select your favorite package and place order.
              </p>
            </div>

            <div className="dashboard-grid">
              {packages.map((item) => (
                <div
                  key={item.id}
                  className="dashboard-card"
                >
                  <h3>{item.title}</h3>

                  <p style={{ marginTop: "10px" }}>
                    Game: {item.game}
                  </p>

                  <p>
                    Price: ৳ {item.price}
                  </p>

                  <button
                    className="primary-btn"
                    style={{ marginTop: "15px" }}
                  >
                    Buy Now
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

export default Topup;
