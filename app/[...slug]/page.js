import Maintenance from "../maintenance";

// Catch-all so every path (e.g. /about-us, /services/...) shows the
// maintenance page while the site is offline.
export default function CatchAll() {
  return <Maintenance />;
}
