
import TimelineChart from "@/components/Timeline/Chart/Chart";
import TimelineSidebar from "@/components/Timeline/Sidebar/Sidebar";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Timeine"
}

export default function Page() {
  return (
    <main>
      <h1>This is the timeline page.</h1>
      <TimelineChart></TimelineChart>
      <TimelineSidebar></TimelineSidebar>
    </main>
  );
}