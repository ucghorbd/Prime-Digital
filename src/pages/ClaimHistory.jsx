import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ClaimHistory() {
  const claims = [
    {
      id: 1,
      card: "10 Referrals",
      amount: 300,
      status: "Holding",
      releaseDate: "12 Jun 2026"
    },
    {
      id: 2,
      card: "25 Referrals",
      amount: 1000,
      status: "Released",
      releaseDate: "01 Jun 2026"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Claim History</span>
              <h2>Salary Claim Records</h2>
              <p>
                Track all your salary card claims.
              </p>
            </div>

            <div className="dashboard-card">
              <div style={{ overflowX: "auto" }}>
                <table className="transaction-table">
                  <thead>
                    <tr>
                      <th>Card</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Release Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {claims.map((claim) => (
                      <tr key={claim.id}>
                        <td>{claim.card}</td>
                        <td>৳ {claim.amount}</td>
                        <td>{claim.status}</td>
                        <td>{claim.releaseDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ClaimHistory;
