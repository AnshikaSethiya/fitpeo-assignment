import { Layout, Menu } from "antd";
import React from "react";
import { BiTask } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { FaFan } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoBarChartOutline } from "react-icons/io5";

const { Sider } = Layout;
const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsed={true}
      style={{ backgroundColor: "#202028" }}
    >
      <div className="logo">
        <FaFan style={{ fontSize: "2.5rem", color: "#6f94fc" }} />
      </div>
      <Menu
        style={{
          backgroundColor: "#202028",
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Menu.Item
          key="1"
          style={{ margin: "15px 0" }}
          icon={
            <GoHome
              style={{
                color: "#737276",
                fontSize: "2rem",
              }}
            />
          }
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{ margin: "15px 0" }}
          icon={
            <IoBarChartOutline style={{ color: "#737276", fontSize: "2rem" }} />
          }
        >
          Stats
        </Menu.Item>
        <Menu.Item
          key="3"
          style={{ margin: "15px 0" }}
          icon={<BiTask style={{ color: "#737276", fontSize: "2rem" }} />}
        >
          Task
        </Menu.Item>
        <Menu.Item
          style={{ margin: "15px 0" }}
          icon={
            <CiWallet
              style={{
                color: "#737276",
                fontSize: "2rem",
                fontWeight: "bolder",
              }}
            />
          }
          key="4"
        >
          Orders
        </Menu.Item>
        <Menu.Item
          style={{ margin: "15px 0" }}
          icon={<BsCartCheck style={{ color: "#737276", fontSize: "2rem" }} />}
          key="5"
        >
          Products
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
