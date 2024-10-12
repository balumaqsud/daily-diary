import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem with the dairy</h2>
      <p>we couldnot find the Diary you are looking for</p>
      <p>
        Please! go back to <Link href={"/dairies"}>daires</Link>
      </p>
    </main>
  );
}
