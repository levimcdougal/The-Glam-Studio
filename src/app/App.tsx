export default function App() {
  return (
    <main
      style={{
        backgroundColor: "#fff",
        color: "#202124",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          boxSizing: "border-box",
          margin: "0 auto",
          maxWidth: "640px",
          padding: "18vh 24px 48px",
        }}
      >
        <svg
          aria-hidden="true"
          fill="none"
          height="72"
          viewBox="0 0 72 72"
          width="72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5.5h27L57 20.7v45.8H15V5.5Z"
            stroke="#5F6368"
            strokeWidth="3"
          />
          <path d="M42 5.5v15.2h15" stroke="#5F6368" strokeWidth="3" />
          <circle cx="29" cy="34" fill="#5F6368" r="2.5" />
          <circle cx="43" cy="34" fill="#5F6368" r="2.5" />
          <path d="M27 51c4.6-5 13.4-5 18 0" stroke="#5F6368" strokeWidth="3" />
        </svg>

        <h1
          style={{
            fontSize: "28px",
            fontWeight: 400,
            lineHeight: 1.25,
            margin: "28px 0 18px",
          }}
        >
          Error
        </h1>

        <p style={{ fontSize: "15px", margin: 0 }}>
          This website does not exist.
        </p>
      </section>
    </main>
  );
}
