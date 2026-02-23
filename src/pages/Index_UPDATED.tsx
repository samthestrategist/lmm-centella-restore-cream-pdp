// ... keeping the same imports and constants from the original, just showing the pricing section update

// Add SECRET25 Box component after CTAButton:
const SECRET25Box = () => (
  <div style={{
    background: "#FFF9E6",
    border: "3px solid #FFB800",
    padding: "20px",
    margin: "20px 0",
    textAlign: "center" as const,
    borderRadius: "12px",
  }}>
    <p style={{ fontSize: "24px", margin: 0, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: COLORS.headline }}>
      🎁 <strong>Use code SECRET25 at checkout</strong>
    </p>
    <p style={{ fontSize: "18px", margin: "10px 0 0 0", color: COLORS.body }}>
      to unlock today's final sale price
    </p>
  </div>
);

