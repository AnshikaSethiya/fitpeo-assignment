import { RightOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import React from "react";
import { BiDish } from "react-icons/bi";
import { IoMdLocate } from "react-icons/io";
import { PiHamburger } from "react-icons/pi";

const data = [
  {
    key: "1",
    icon: (
      <IoMdLocate
        color="#a84d2c"
        style={{ backgroundColor: "#5d3236" }}
        className="cardIcon"
      />
    ),
    title: "Goals",
  },
  {
    key: "2",
    icon: (
      <PiHamburger
        color="#5169bc"
        style={{ backgroundColor: "#293368" }}
        className="cardIcon"
      />
    ),
    title: "Popular Dishes",
  },
  {
    key: "3",
    icon: (
      <BiDish
        color="#227399"
        style={{ backgroundColor: "#214962" }}
        className="cardIcon"
      />
    ),
    title: "Menus",
  },
];

const GoalsSection = () => {
  return (
    <Card
      type="inner"
      style={{
        backgroundColor: "#202028",
        color: "#fff",
        border: "none",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item className="listItem">
            <List.Item.Meta
              avatar={item.icon}
              title={<div className="goalTitle">{item.title}</div>}
            />
            <RightOutlined className="rightOutline" />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default GoalsSection;
