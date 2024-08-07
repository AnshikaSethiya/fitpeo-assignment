import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCaretDown, FaCaretUp, FaShoppingBasket } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";

const data = [
  {
    icon: (
      <FaShoppingBasket
        className="kpi-icon"
        color="#5573fd"
        style={{ backgroundColor: "#293268" }}
      />
    ),
    name: "Total Orders",
    value: "75",
    percent: "3",
    color: "#0d8363",
    symbol: <FaCaretUp />,
  },
  {
    icon: (
      <IoBagHandleSharp
        color="#00c88c"
        className="kpi-icon"
        style={{ backgroundColor: "#175145" }}
      />
    ),
    name: "Total Delivered",
    value: "70",
    percent: "3",
    color: "#9b3f42",
    symbol: <FaCaretDown />,
  },
  {
    icon: (
      <IoBagHandleSharp
        className="kpi-icon"
        color="#f05e5d"
        style={{ backgroundColor: "#5f3237" }}
      />
    ),
    name: "Total Cancelled",
    value: "05",
    percent: "3",
    color: "#0d8363",
    symbol: <CaretUpFilled />,
  },
  {
    icon: (
      <BsCurrencyDollar
        className="kpi-icon"
        color="#e74da5"
        style={{ backgroundColor: "#5b294a" }}
      />
    ),
    name: "Total Revenue",
    value: "$12k",
    color: "#9b3f42",
    symbol: <CaretDownFilled />,
    percent: "3",
  },
];

const KpiCards = () => {
  return (
    <div className="card-horizontal">
      {data.map((item) => {
        return (
          <div className="kpi-card">
            <div>
              {item.icon}
              <div className="font-color">{item.name}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "70%",
              }}
            >
              <h1 className="font-color">{item.value}</h1>
              <h3 style={{ color: item.color }}>
                {item.symbol}
                {item.percent}%
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KpiCards;
