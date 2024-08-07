import { CaretUpFilled } from "@ant-design/icons";
import { Card, Progress } from "antd";
import React from "react";

const NetProfitCard = () => {
  return (
    <Card className="netProfit" type="inner">
      <div style={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "40%" }}>
            <div
              style={{ fontSize: "16px", color: "#fff", marginBottom: "10px" }}
            >
              Net Profit
            </div>
            <div
              style={{ fontSize: "36px", fontWeight: "bold", color: "#fff" }}
            >
              $6759.25
            </div>
            <div>
              <span style={{ color: "#4fa041", fontSize: "16px" }}>
                <CaretUpFilled /> 3 %
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Progress
              type="circle"
              percent={70}
              strokeColor="#7294ff"
              format={() => <p style={{ color: "#fff" }}>70%</p>}
              strokeWidth={15}
              trailColor="#44475a"
              size={100}
            />
            <p style={{ fontSize: "10px" }}>
              *The values here have been rounded off.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NetProfitCard;
