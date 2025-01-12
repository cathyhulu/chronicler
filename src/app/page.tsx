import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 items-center">
        <h1>chronicler</h1>
        <Link href="/timeline">
          <button>Go to Timeline</button>
        </Link>
        <Link href="/map">
          <button>Go to Map</button>
        </Link>
      </main>
    </div>
  );
}
