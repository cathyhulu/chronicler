'use client';
export const dynamic = "force-dynamic";

import TimelineSidebar from "@/components/Timeline/Sidebar/Sidebar";

import { useSuspenseQuery, gql } from "@apollo/client";

const query = gql`query {
  books {
    title
  }
}`

export default function Home() {
  const {data} = useSuspenseQuery(query);
  return (
    <div>
      <main className="flex flex-col gap-8 items-center">
        <h1>chronicler</h1>
        <TimelineSidebar/>
      </main>
    </div>
  );
}
