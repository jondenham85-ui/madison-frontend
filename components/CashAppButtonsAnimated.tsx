"use client";

export default function CashAppButtonsAnimated() {
  return (
    <div style={{ padding: "20px" }}>
      <style>{`
        @keyframes neonPulse {
          0% {
            box-shadow: 0 0 15px rgba(0, 229, 255, 0.4),
                        0 0 30px rgba(0, 229, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 25px rgba(0, 229, 255, 0.8),
                        0 0 45px rgba(0, 229, 255, 0.4);
          }
          100% {
            box-shadow: 0 0 15px rgba(0, 229, 255, 0.4),
                        0 0 30px rgba(0, 229, 255, 0.2);
          }
        }

        .cash-button,
        .cash-sub {
          display: inline-block;
          padding: 14px 26px;
          margin: 12px 0;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          background: linear-gradient(135deg, #00e5ff, #0099cc);
          color: #000;
          animation: neonPulse 2.2s infinite ease-in-out;
          transition: all 0.25s ease;
        }

        .cash-button:hover,
        .cash-sub:hover {
          transform: translateY(-4px) scale(1.03);
          filter: brightness(1.15);
        }

        .cash-button:active,
        .cash-sub:active {
          transform: scale(0.96);
        }
      `}</style>

      <h1 style={{ color: "#00e5ff", marginBottom: "20px" }}>
        Cash App Payments
      </h1>

      {/* One‑time payments */}
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

      {/* Subscriptions */}
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

