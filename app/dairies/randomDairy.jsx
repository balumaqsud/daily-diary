import React from "react";
import clientPromise from "@/database/db";

export const revalidate = 30;

export default async function RandomDairy() {
  try {
    const client = await clientPromise;
    const db = client.db("dairies");
    //fetching data from collection
    const dairies = await db.collection("dairies").find({}).toArray();

    return (
      <>
        {dairies.length > 0 ? (
          <p>{dairies[Math.floor(Math.random() * dairies.length)].body}</p>
        ) : (
          <p>No diary entries available</p>
        )}
      </>
    );
  } catch (error) {
    console.log(error);
    return error;
  }
}
