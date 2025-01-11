"use client"

import * as d3 from "d3";
import { useState, useRef, useEffect,  } from "react";

const TimelineChart: React.FC = () => {
  const [data, setDataset] = useState(generateDataset());

  function generateDataset () {
    return Array(10).fill(0).map(() => ([
      Math.random() * 80 + 10,
      Math.random() * 35 + 10,
    ]))
  }
  return (


    <div>
      <h2>This is the chart</h2>
  
    </div>
  )
}

export default TimelineChart; 