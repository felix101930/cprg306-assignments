import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <p className="text-lg">
          <Link href="/week-2" className="text-blue-500 hover:underline">
            Go to Week 2
          </Link>
        </p>
      </main>
    </div>
  );
}
