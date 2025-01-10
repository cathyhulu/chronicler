import Image from "next/image";

import TimelineSidebar from "@/components/Timeline/Sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 items-center">
        <h1>chronicler</h1>
        <TimelineSidebar/>
      </main>
    </div>
  );
}
