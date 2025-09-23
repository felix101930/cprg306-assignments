import Link from "next/link";

export default function Home() {
  return (
    <div >
      <main >
        <h1 >CPRG 306: Web Development 2 - Assignments</h1>
        <div>
          <p>
            <Link href="/week-2">
              Go to Week 2
            </Link>
          </p>
          <p>
            <Link href="/week-3">
              Go to Week 3
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
