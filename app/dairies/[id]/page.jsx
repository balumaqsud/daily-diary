import React from "react";
import { ObjectId } from "mongodb";
import clientPromise from "../../../database/db";
import NotFound from "./not-found";

export const revalidate = 60;

export default async function DairyDitails({ params }) {
  const { id } = params;

  try {
    //consts
    const client = await clientPromise;
    const db = client.db("dairies");

    if (!ObjectId.isValid(id)) {
      return <NotFound />; // Handle invalid ID gracefully
    }

    //fetching data from collection
    const dairy = await db
      .collection("dairies")
      .findOne({ _id: new ObjectId(id) });

    return (
      <main key={dairy._id}>
        <nav>
          <h2>Dairy details</h2>
        </nav>
        <div className="card my-5">
          <h3>{dairy.title}</h3>
          <small>{`created by ${dairy.user_email}`}</small>
          <p>{dairy.body}</p>
          <div className={`pill ${dairy.priority}`}>{dairy.priority}</div>
        </div>
      </main>
    );
  } catch (error) {
    console.log("error fetching single dairy", error);
    return <NotFound />;
  }
}
