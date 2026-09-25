export default function CashAppPage() {
  return (
    <div style={{ padding: "20px" }}>
      <style>{`
        .cash-button,
        .cash-sub {
          display: inline-block;
          padding: 12px 22px;
          margin: 10px 0;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          background: linear-gradient(135deg, #00e5ff, #0099cc);
          color: #000;
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.5);
          transition: all 0.25s ease;
        }

        .cash-button:hover,
        .cash-sub:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.8);
        }

        .cash-button:active,
        .cash-sub:active {
          transform: scale(0.97);
        }
      `}</style>

      <h1 style={{ color: "#00e5ff", marginBottom: "20px" }}>
        Cash App Payments
      </h1>

      {/* Cash App Pay Buttons */}
      <a href="https://cash.app/$MadMadisonAI/10" className="cash-button">
        Pay $10 with Cash App
      </a>

      <a href="https://cash.app/$MadMadisonAI/20" className="cash-button">
        Pay $20 with Cash App
      </a>

      <a href="https://cash.app/$MadMadisonAI/50" className="cash-button">
        Pay $50 with Cash App
      </a>

      <h2 style={{ color: "#00e5ff", marginTop: "30px" }}>
        Subscriptions
      </h2>

      {/* Cash App Subscriptions */}
      <a
        href="https://cash.app/$MadMadisonAI?amount=10&subscription=true"
        className="cash-sub"
      >
        $10 Monthly Subscription
      </a>

      <a
        href="https://cash.app/$MadMadisonAI?amount=20&subscription=true"
        className="cash-sub"
      >
        $20 Monthly Subscription
      </a>

      <a
        href="https://cash.app/$MadMadisonAI?amount=50&subscription=true"
        className="cash-sub"
      >
        $50 Monthly Subscription
      </a>
    </div>
  );
}
