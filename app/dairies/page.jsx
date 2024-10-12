import React, { Suspense } from "react";
import DairiestList from "./dairiestList";
import Loading from "../loading";

export default function Dairy() {
  return (
    <main>
      <nav>
        <div>
          <h2>Diaries</h2>
          <p>
            <small>Currently open dairies</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <DairiestList />
      </Suspense>
    </main>
  );
}
