"use client"

import { scaleLinear, scaleBand, select, } from "d3";
import { useState, useRef, useEffect, ReactNode,  } from "react";

interface TimelineChartProps {
  dataProp?: any[]
}

const TimelineChart: React.FC<TimelineChartProps> = ({dataProp}) => {
  const [data, setData] = useState(dataProp ?? [])
  const svgRef = useRef<SVGSVGElement>(null);
  const width = 960
  const height = 500
  const margin = 10
  const maxRadius = 40

  useEffect(()=> {
    const xScale = scaleLinear().domain([0,1]).range([0,width])
    const yScale = scaleLinear().domain([0,1]).range([height, 0])
    const rScale = scaleLinear().domain([0,1]).range([0,maxRadius])

    select(svgRef.current)
      .selectAll('circle')
      .data(data)
      .attr('cx', d => xScale(d.x))
      .attr('cy', d => yScale(d.y))
      .attr('r', d => rScale(d.r))
      .attr('fill', '#000')

  }, [data,width,height])

  return (


    <div>
      <h2>This is the chart</h2>
      <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`} >
        {data.map((d) => 
            <circle fill='#FFF'></circle>
        )}

      </svg>
  </div>
  )
}

export default TimelineChart; 

  // const lines = [10, 20, 30, 40]

  // const yScale = scaleBand()
  //   .domain(data)
  //   .range([0, height - 2 * margin])

  // const xScale = scaleLinear()
  //   .domain([0, max(data, d=> d.sunshine)])
  //   .range([0,width - margin])

  // const rectangles = data?.map(d => 
  //   <rect 
  //     key={d.city}
  //     x={margin} 
  //     y={yScale(d)} 
  //     height={yScale.bandwidth()}
  //     width={xScale(d.sunshine)}
  //     fill='darkorange'
  //     stroke='#FFF'>
  //   </rect>)
  
  // const labels = data?.map(d =>
  //   <text
  //     fill="#FFF"
  //     textAnchor='end'
  //     key={d.city}
  //     x={xScale(d.sunshine)}
  //     y={yScale(d)}>
  //     {d.city}
  //   </text>
  // )

  // const gridlines = lines.map(l =>
  //   <g>
  //     <line y1={0} y2={height} x1={xScale(l)} x2={xScale(l)} stroke="#FFF"></line>
  //     <text fontSize="12px" textAnchor="middle" x={xScale(l)} y={height-10} >{l}</text>
  //   </g>

  // )