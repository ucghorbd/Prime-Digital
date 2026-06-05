import { Link } from "react-router-dom";

function Register() {
  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <p style={styles.badge}>Prime Digital</p>

        <h1 style={styles.title}>Create Account</h1>

        <p style={styles.subtitle}>
          Register to start earning and access your dashboard.
        </p>

        <form style={styles.form}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            style={styles.input}
          />

          <label style={styles.label}>User Name</label>
          <input
            type="text"
            placeholder="Enter username"
            style={styles.input}
          />

          <label style={styles.label}>Email or Number</label>
          <input
            type="text"
            placeholder="Enter email or mobile"
            style={styles.input}
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            style={styles.input}
          />

          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            style={styles.input}
          />

          <label style={styles.label}>Referral Code</label>
          <input
            type="text"
            placeholder="Enter referral code (optional)"
            style={styles.input}
          />

          <button type="submit" style={styles.primaryBtn}>
            Register
          </button>
        </form>

        <div style={styles.links}>
          <Link to="/login" style={styles.link}>
            Already have an account?
          </Link>
        </div>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#0f1115",
    padding: "24px"
  },
  card: {
    width: "100%",
    maxWidth: 500,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 24,
    padding: 32,
    color: "#fff"
  },
  badge: {
    display: "inline-block",
    background: "rgba(255,255,255,0.08)",
    padding: "8px 14px",
    borderRadius: 999,
    color: "#d6dbe4",
    marginBottom: 16
  },
  title: {
    fontSize: 32,
    marginBottom: 10
  },
  subtitle: {
    color: "#b9c0cc",
    marginBottom: 24
  },
  form: {
    display: "grid",
    gap: 14
  },
  label: {
    fontSize: 14,
    color: "#d6dbe4",
    marginTop: 4
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    outline: "none"
  },
  primaryBtn: {
    marginTop: 8,
    padding: "14px 18px",
    borderRadius: 14,
    border: "none",
    background: "#ffffff",
    color: "#0f1115",
    fontWeight: 700,
    cursor: "pointer"
  },
  links: {
    marginTop: 18,
    display: "flex",
    justifyContent: "center"
  },
  link: {
    color: "#ffffff",
    textDecoration: "underline"
  }
};

export default Register;
