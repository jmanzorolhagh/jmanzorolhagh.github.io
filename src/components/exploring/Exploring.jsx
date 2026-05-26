import "./exploring.scss";

export default function Exploring() {
  return (
    <section className="exploring" id="exploring">
      <div className="container">
        <h2>Currently Exploring</h2>
        <p className="lead">
          Topics I'm actively reading, implementing, or building.
        </p>

        <div className="exploring-group">
          <h3>Conformal Risk Control</h3>
          <p>
            Distribution-free uncertainty quantification. Split and
            adaptive conformal prediction; conformal risk control for bounded
            loss functions. Especially in applying these to options forecasts to
            create distribution free bounds.
          </p>
        </div>

        <div className="exploring-group">
          <h3>Market Microstructure & Options</h3>
          <p>
            Order book dynamics, bid-ask and liquidity modeling for multi-leg
            options, and how transaction costs and ADV constraints shape what
            a roll decision engine should actually recommend.
          </p>
        </div>

        <div className="exploring-group">
          <h3>Low-Latency Systems</h3>
          <p>
            Modern C++ for hot-path code, lock-free data structures, kernel
            bypass networking, and the systems engineering practices that
            separate research code from code that runs in production trading.
          </p>
        </div>
      </div>
    </section>
  );
}
