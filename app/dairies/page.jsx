import React from "react";
import DairiestList from "./dairiestList";

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
      <DairiestList />
    </main>
  );
}
