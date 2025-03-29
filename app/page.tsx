import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>J.S Portfolio</title>
        <meta name="description" content="Portfolio for J.S" />
      </Head>

      <main className="container mx-auto px-4 py-10">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold">J.S</h1>
          <p className="text-xl mt-4">
            Fullstack Developer &amp; Software Engineer
          </p>
        </header>

        <section className="grid gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              Hey there! I&apos;m J.S, a passionate developer with a knack for
              building scalable web applications. I love tinkering with code,
              pushing boundaries, and crafting flawless experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Project One:</strong> A cool project that does amazing
                things.
              </li>
              <li>
                <strong>Project Two:</strong> Another awesome project showcasing
                cutting-edge technology.
              </li>
              <li>
                <strong>Project Three:</strong> A deep dive into scalable
                architectures.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
