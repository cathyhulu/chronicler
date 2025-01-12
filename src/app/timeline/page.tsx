import TimelineChart from "@/components/Timeline/Chart/Chart";
import TimelineSidebar from "@/components/Timeline/Sidebar/Sidebar";
import sunshine from '@/_data/sunshine.json';
import { getData } from '@/_scripts/utils';

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Timeine"
}

export default function Page() {

  // const data = sunshine.map((d) => {
  //   return {city: d.CITY, sunshine: d['JUL']}
  // })
  //   .sort((a,b) => b.sunshine - a.sunshine)
  //   .slice(0,20)

  return (
    <main>
      <h1>This is the timeline page.</h1>
      <TimelineChart dataProp={getData()}></TimelineChart>
      <TimelineSidebar></TimelineSidebar>
    </main>
  );
}