import { Card, Select } from "antd";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "5", uv: 40000 },
  { name: "6", uv: 30000 },
  { name: "7", uv: 20000 },
  { name: "8", uv: 27800 },
  { name: "9", uv: 18900 },
  { name: "10", uv: 23900 },
  { name: "11", uv: 34900 },
  { name: "12", uv: 31000 },
  { name: "13", uv: 47000 },
  { name: "14", uv: 30000 },
  { name: "15", uv: 57000 },
  { name: "16", uv: 27800 },
  { name: "17", uv: 18900 },
  { name: "18", uv: 23900 },
  { name: "19", uv: 34900 },
  { name: "20", uv: 43000 },
  { name: "21", uv: 50000 },
  { name: "22", uv: 18000 },
  { name: "23", uv: 23500 },
  { name: "24", uv: 10000 },
  { name: "25", uv: 22300 },
  { name: "26", uv: 11500 },
  { name: "27", uv: 32000 },
];

const ActivityChart = () => {
  return (
    <Card
      bordered={false}
      type="inner"
      bodyStyle={{ padding: "0px" }}
      className="card activity-card"
      title={<h2 className="font-color">Activity</h2>}
      extra={
        <Select
          defaultValue="weekly"
          className="activityDrop"
          style={{
            width: 90,
          }}
          options={[
            {
              value: "weekly",
              label: "Weekly",
            },
            {
              value: "daily",
              label: "Daily",
            },
          ]}
        />
      }
      headStyle={{ borderBottom: "none" }}
    >
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3 " vertical={false} />
          <XAxis dataKey="name" stroke="#fff" interval={2} />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            radius={[18, 18, 18, 18]}
            style={{ marginBottom: "2px" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ActivityChart;
