export default function Maintenance() {
  return (
    <main className="wrap">
      <section className="card">
        {/* Plain <img> (not next/image) keeps the build dependency-free */}
        <img className="logo" src="/logo.svg" alt="BPAAS Solutions" />

        <span className="badge">
          <span className="dot" />
          Under Maintenance
        </span>

        <h1>
          We&rsquo;re making things <span className="accent">better</span>
        </h1>

        <div className="rule" />

        <p>
          Our website is currently undergoing scheduled maintenance. We&rsquo;ll
          be back online shortly. Thank you for your patience.
        </p>

        <p className="contact">
          Need to reach us? Email{" "}
          <a href="mailto:enquiry@bpaassolutions.com">
            enquiry@bpaassolutions.com
          </a>
        </p>
      </section>
    </main>
  );
}
