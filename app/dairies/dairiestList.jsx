import React from "react";
import Link from "next/link";

// imports from other files
import clientPromise from "../../database/db";

export const revalidate = 30;

export default async function DairiestList() {
  try {
    //consts
    const client = await clientPromise;
    const db = client.db("dairies");

    //fetching data from collection
    const dairies = await db.collection("dairies").find({}).toArray();
    console.log("dairies: ", dairies);
    return (
      <>
        {dairies.map((dairy) => (
          <Link href={`/dairies/${dairy._id}`}>
            <div className="card my-5" key={dairy._id}>
              <h3>{dairy.title}</h3>
              <p>{dairy.body.slice(0, 200)}... </p>
              <div className={`pill ${dairy.priority}`}>{dairy.priority}</div>
            </div>
          </Link>
        ))}
        x
        {dairies.length === 0 && (
          <p className="text-center">there are no dairies yet!</p>
        )}
      </>
    );
  } catch (error) {
    console.log("error in fetching the data:", error);
    return <div>Error fetching posts</div>;
  }
}
