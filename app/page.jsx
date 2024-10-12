import Link from "next/link";
import DairiestList from "./dairies/dairiestList";
import RandomDairy from "./dairies/randomDairy";
import { Suspense } from "react";
import Loading from "./loading";

// homepage
export default async function Home() {
  return (
    <main>
      <h2>#Main#DiaryOfTheDay</h2>
      <RandomDairy />
      <div className="flex justify-center my-8">
        <Link href="/dairies">
          <button className="btn-primary">Read Diaries</button>
        </Link>
      </div>
      <h2>New Diaries</h2>
      <Suspense fallback={<Loading />}>
        <DairiestList />
      </Suspense>

      <Link href={"https://github.com/balumaqsud"}>
        <h2>@balumaqsud</h2>
      </Link>
    </main>
  );
}
