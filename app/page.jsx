import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Next.js is a popular React framework for building fast, server-rendered
        web applications. It offers features like static site generation (SSG),
        server-side rendering (SSR), and API routes, making it highly versatile
        for both front-end and back-end development. It also supports automatic
        code-splitting, and has built-in optimizations for performance and SEO.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/blogs">
          <button className="btn-primary">Read Blogs</button>
        </Link>
      </div>

      <h2>New Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
          quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
          pariatur molestiae, modi beatae corrupti.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
          quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
          pariatur molestiae, modi beatae corrupti, assumenda distinctio
          adipisci, cupiditate minima eum vitae? Similique dicta est facilis
          debitis, autem temporibus quo repellat illum unde id iste veritatis
          eveniet, aspernatur enim quas.
        </p>
      </div>
      <div>
        <Link href={"https://github.com/balumaqsud"}>
          <h2>@balumaqsud</h2>
        </Link>
      </div>
    </main>
  );
}
