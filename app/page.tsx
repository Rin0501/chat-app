"use client";
export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff0f5",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#ff5b8d", marginBottom: "1rem" }}>
        さみしい窓口
      </h1>

      <p
        style={{
          maxWidth: "300px",
          fontSize: "1rem",
          color: "#555",
          lineHeight: 1.5,
          marginBottom: "2rem",
        }}
      >
        会わない。連絡先も交換しない。
        <br />
        たださみしい夜に、誰かと2人で話せる場所。
      </p>

      <button
        style={{
          backgroundColor: "#ff5b8d",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
        onClick={() => alert("部屋を立てる機能は後で追加予定です！")}
      >
        ＋ 部屋を立てる
      </button>
    </main>
  );
}
