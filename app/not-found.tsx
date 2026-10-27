import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>We can’t find that page.</h2>
      <p>The page may have moved, or the link may be incorrect.</p>
      <Link className="button button-primary" href="/">
        Return home
      </Link>
    </div>
  );
}
