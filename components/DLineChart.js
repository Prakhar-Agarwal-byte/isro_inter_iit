import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const pdata = [
  {
    name: "MongoDb",
    student: 11,
    fees: 120,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
  },
];

function DLineChart() {
  return (
    <ResponsiveContainer>
      <LineChart data={pdata}>
        <CartesianGrid />
        <XAxis dataKey="name" interval={"preserveStartEnd"} />
        <YAxis></YAxis>
        <Legend />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="fees"
          stroke="violet"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default DLineChart;
