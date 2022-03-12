import { convertCSVToArray } from "../helper/CSVtoArray";
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
import { useEffect, useState } from "react";

const Chart = ({ maxTime, fileName }) => {
  const [LightCurvedata, setState] = useState([]);
  useEffect(() => {
    convertCSVToArray(fileName).then((tempData) => {
      console.log(tempData);
      setState(
        tempData.Time.filter((t) => {
          console.log("maxTime", maxTime);
          return new Date(t).getTime() <= maxTime;
        }).map((t, ind) => {
          return {
            time: new Date(t).getTime(),
            rate: parseInt(tempData.Rate[ind]),
          };
        })
      );
    });
  }, [maxTime, fileName]);

  console.log(LightCurvedata);
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        data={LightCurvedata}
        margin={{ top: 5, right: 40, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          label={{ value: "Time" }}
          dataKey="time"
          tick={false}
          domain={["dataMin", "dataMax"]}
          type="number"
          scale="time"
        />
        <YAxis
          label={{ value: "Flux" }}
          tick={false}
          dataKey="rate"
          domain={["0", "dataMax"]}
        />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Line type="monotone" dataKey="rate" stroke="#1976d2" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
