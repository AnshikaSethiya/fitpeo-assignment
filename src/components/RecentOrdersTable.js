import { Avatar, Table, Tag } from "antd";
import React from "react";

const dataSource = [
  {
    key: "1",
    customer: "Wade Warren",
    orderNo: 1286745,
    amount: 123.45,
    status: "Delivered",
    avatar: (
      <Avatar src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" />
    ),
  },
  {
    key: "2",
    customer: "Jane Cooper",
    orderNo: 4567823,
    amount: 123.45,
    status: "Delivered",
    avatar: (
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&s" />
    ),
  },
  {
    key: "3",
    customer: "Guy Hawkins",
    orderNo: 78934568,
    amount: 123.45,
    status: "Cancelled",
    avatar: (
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&s" />
    ),
  },
  {
    key: "4",
    customer: "Kristin Watson",
    orderNo: 20087654,
    amount: 123.45,
    status: "Pending",
    avatar: (
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVI8wwjmbk07RHjMaoxGcLQw5kRfAizckn7g&s" />
    ),
  },
  {
    key: "5",
    customer: "Cody Fisher",
    amount: 123.45,
    orderNo: 95786945,
    status: "Delivered",
    avatar: (
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s" />
    ),
  },
  {
    key: "6",
    customer: "Savannah Nguyen",
    amount: 123.45,
    orderNo: 78451209,
    status: "Delivered",
    avatar: (
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y8xdMzqgoLdNgSKvSuEmZmYDKVqeY7Pqtw&s" />
    ),
  },
];

const columns = [
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
    render: (text, record) => (
      <>
        {record.avatar} {text}
      </>
    ),
  },
  {
    title: "Order No.",
    dataIndex: "orderNo",
    key: "orderNo",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (item) => {
      let color = item === "Delivered" ? "success" : "error";
      return (
        <Tag bordered={false} color={color}>
          {item}
        </Tag>
      );
    },
  },
];

const RecentOrdersTable = () => {
  return (
    <div className="card">
      <h2 className="font-color">Recent Orders</h2>
      <Table
        dataSource={dataSource}
        className="custom-table"
        columns={columns}
        bordered={false}
        pagination={false}
        style={{
          backgroundColor: "#f9f9f9",
        }}
      />
    </div>
  );
};

export default RecentOrdersTable;
