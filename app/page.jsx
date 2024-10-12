import Link from "next/link";

// imports from other files
import clientPromise from "../database/db";

// homepage
export default async function Home() {
  try {
    //consts
    const client = await clientPromise;
    const db = client.db("dairies");

    //fetching data from collection
    const dairies = await db.collection("dairies").find({}).toArray();

    return (
      <main>
        <h2>#Main#DiaryOfTheDay</h2>
        {dairies.length > 0 ? (
          <p>{dairies[Math.floor(Math.random() * dairies.length)].body} </p>
        ) : (
          <p>No diary entries available</p>
        )}
        <div className="flex justify-center my-8">
          <Link href="/dairies">
            <button className="btn-primary">Read Diaries</button>
          </Link>
        </div>

        <h2>New Diaries</h2>
        {dairies.map((dairy) => (
          <div className="card" key={dairy._id}>
            <h3>{dairy.title}</h3>
            <p>{dairy.body} </p>
          </div>
        ))}

        <Link href={"https://github.com/balumaqsud"}>
          <h2>@balumaqsud</h2>
        </Link>
      </main>
    );
  } catch (error) {
    console.log("error in fetching the data:", error);
    return <div>Error fetching posts</div>;
  }
}
