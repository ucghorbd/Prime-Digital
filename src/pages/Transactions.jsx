import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Transactions() {
  const transactions = [
    {
      id: 1,
      type: "Income",
      source: "Referral Bonus",
      amount: 20,
      status: "Completed",
      date: "05 Jun 2026"
    },
    {
      id: 2,
      type: "Expense",
      source: "Withdraw",
      amount: 100,
      status: "Processing",
      date: "04 Jun 2026"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span>Transactions</span>
              <h2>Transaction History</h2>
              <p>Track all your income and expenses.</p>
            </div>

            <div className="dashboard-card">
              <div style={{ overflowX: "auto" }}>
                <table className="transaction-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Source</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {transactions.map((txn) => (
                      <tr key={txn.id}>
                        <td>{txn.type}</td>
                        <td>{txn.source}</td>
                        <td>৳ {txn.amount}</td>
                        <td>{txn.status}</td>
                        <td>{txn.date}</td>
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

export default Transactions;
