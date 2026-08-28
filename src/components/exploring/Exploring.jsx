import "./exploring.scss";

export default function Exploring() {
  return (
    <section className="exploring" id="exploring">
      <div className="container">
        <h2>Research &amp; Engineering Interests</h2>
        <p className="lead">
          Topics I'm actively reading, implementing, or building.
        </p>

        <div className="exploring-group">
          <h3>Online Forecasting &amp; Uncertainty</h3>
          <p>
            Short-horizon demand forecasting, split and adaptive conformal
            prediction, and distribution-free uncertainty estimates for
            decisions made from changing, real-world data.
          </p>
        </div>

        <div className="exploring-group">
          <h3>Real-Time Decision Systems</h3>
          <p>
            Streaming data pipelines, risk-aware decision rules, and the
            engineering required to turn statistical forecasts into reliable
            operational recommendations.
          </p>
        </div>

        <div className="exploring-group">
          <h3>Performance-Oriented C++</h3>
          <p>
            Modern C++ for latency-sensitive code, efficient inference,
            concurrency, and the systems practices that separate research
            prototypes from dependable production software.
          </p>
        </div>
      </div>
    </section>
  );
}
