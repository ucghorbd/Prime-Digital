import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main style={styles.page}>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <p style={styles.badge}>Welcome to Prime Digital</p>
            <h1 style={styles.title}>
              Build your earning platform with a clean modern design
            </h1>
            <p style={styles.subtitle}>
              Responsive, fast, and ready for Firebase integration later.
            </p>

            <div style={styles.actions}>
              <a href="/register" style={styles.primaryBtn}>
                Get Started
              </a>
              <a href="/login" style={styles.secondaryBtn}>
                Login
              </a>
            </div>
          </div>
        </section>

        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Features</h2>
          <div style={styles.grid}>
            <div style={styles.card}>Fast UI</div>
            <div style={styles.card}>Responsive Layout</div>
            <div style={styles.card}>Firebase Ready</div>
          </div>
        </section>

        <section id="testimonials" style={styles.section}>
          <h2 style={styles.sectionTitle}>Testimonials</h2>
          <div style={styles.grid}>
            <div style={styles.card}>User feedback block</div>
            <div style={styles.card}>User feedback block</div>
            <div style={styles.card}>User feedback block</div>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f1115",
    color: "#fff"
  },
  hero: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "80px 20px",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center"
  },
  heroContent: {
    maxWidth: 700
  },
  badge: {
    display: "inline-block",
    background: "rgba(255,255,255,0.08)",
    padding: "8px 14px",
    borderRadius: 999,
    marginBottom: 20,
    color: "#d6dbe4"
  },
  title: {
    fontSize: "clamp(36px, 6vw, 64px)",
    lineHeight: 1.05,
    marginBottom: 18
  },
  subtitle: {
    fontSize: 18,
    color: "#b9c0cc",
    maxWidth: 560,
    marginBottom: 28
  },
  actions: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap"
  },
  primaryBtn: {
    background: "#ffffff",
    color: "#0f1115",
    padding: "12px 22px",
    borderRadius: 999,
    fontWeight: 700
  },
  secondaryBtn: {
    background: "transparent",
    color: "#ffffff",
    padding: "12px 22px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.2)"
  },
  section: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 20px 70px"
  },
  sectionTitle: {
    fontSize: 28,
    marginBottom: 20
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 20,
    padding: 24,
    minHeight: 120
  }
};

export default Home;
