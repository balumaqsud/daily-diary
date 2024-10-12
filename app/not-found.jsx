import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem with page</h2>
      <p>we couldnot find the page you are looking for</p>
      <p>
        Please! go back to <Link href={"/"}>homepage</Link>
      </p>
    </main>
  );
}
