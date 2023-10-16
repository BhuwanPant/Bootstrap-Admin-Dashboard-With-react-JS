import React from "react";
import {
  BarChart,
  Bar,
  XAxis
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 400,
    Earning: 0,
    amt: 2000
  },
  {
    name: "Feb",
    uv: 300,
    Earning: 0,
    amt: 2210
  },
  {
    name: "Mar",
    uv: 200,
    Earning: 0,
    amt: 2290
  },
  {
    name: "Apr",
    uv: 270,
    Earning: 0,
    amt: 2000
  },
  {
    name: "May",
    uv: 180,
    Earning: 0,
    amt: 2181
  },
  {
    name: "Jun",
    uv: 230,
    Earning: 0,
    amt: 2500
  },
  {
    name: "Jul",
    uv: 100,
    Earning: 0,
    amt: 2100
  },
  {
    name: "Aug",
    uv: 3490,
    Earning: 100,
    amt: 2100
  },
  {
    name: "Sep",
    uv: 340,
    Earning: 0,
    amt: 2100
  },
  {
    name: "Nov",
    uv: 340,
    Earning: 0,
    amt: 2100
  },
  {
    name: "Dec",
    uv: 390,
    Earning: 0,
    amt: 2100
  }
];

export default function App() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 50
      }}
      barSize={25}
    >
      <XAxis dataKey="name"  padding={{left: 10}} />
      <Bar dataKey="Earning" fill="#5a32ea" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
