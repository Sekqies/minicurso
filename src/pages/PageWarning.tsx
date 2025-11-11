import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageWarning(): JSX.Element {
  const navigate = useNavigate();

  return (
    <main style={styles.container} aria-live="polite">
      <div style={styles.card}>
        <img
          src="https://yt3.googleusercontent.com/ytc/AIdro_kNxCzmKdVsP-YU2agg348XdvvHt9XzgVSQujyKx4IELPQ=s900-c-k-c0x00ffffff-no-rj"
          alt="Logo do grupo Ganesh"
          style={styles.logo}
        />

        <h1 style={styles.title}>OPA, CUIDADO AÍ!</h1>

        <p style={styles.lead}>
          <strong>Esse site <em>não</em> é o site de login do Google.</strong>
        </p>

        <p style={styles.body}>
          Isso é um ataque que se chama <strong>Phishing</strong> — o objetivo é
          enganar você para roubar suas credenciais ou dados. Não insira sua
          senha nem avance com dados pessoais.
        </p>

        <p style={styles.body}>
          Quer entender mais? Te vejo na aula de <strong>Engenharia Social</strong>.
        </p>

        <div style={styles.actions}>
          <button style={styles.primary} onClick={() => navigate(-1)}>
            Voltar
          </button>
          <button style={styles.ghost} onClick={() => navigate("/")}>
            Ir para o início
          </button>
        </div>
      </div>
    </main>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg,#f5f7fb,#e9efff)",
    padding: 24,
    fontFamily: "Inter, Roboto, Arial, sans-serif",
  },
  card: {
    maxWidth: 800,
    width: "100%",
    background: "white",
    borderRadius: 12,
    boxShadow: "0 8px 30px rgba(13, 38, 76, 0.12)",
    padding: 32,
    textAlign: "center",
  },
  logo: {
    width: 88,
    height: 88,
    objectFit: "contain",
    marginBottom: 18,
  },
  title: {
    margin: 0,
    fontSize: 36,
    color: "#b71c1c",
  },
  lead: {
    marginTop: 12,
    marginBottom: 8,
    fontSize: 18,
  },
  body: {
    margin: "8px 0",
    color: "#333",
    fontSize: 16,
    lineHeight: 1.5,
  },
  actions: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    marginTop: 20,
  },
  primary: {
    background: "#0958cf",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 15,
  },
  ghost: {
    background: "transparent",
    color: "#0958cf",
    border: "1px solid #0958cf",
    padding: "10px 18px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 15,
  },
  note: {
    display: "block",
    textAlign: "center",
    marginTop: 18,
    color: "#666",
  },
};
