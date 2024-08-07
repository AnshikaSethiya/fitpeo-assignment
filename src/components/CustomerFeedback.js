import { Avatar, Card, List, Rate } from "antd";
import React from "react";

const feedbacks = [
  {
    name: "Jenny Wilson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger and greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 2,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    rating: 4,
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and cooked just right. The selection of sauces is outstanding. They are served with carrots and celery, and a delicious house ranch dip.",
  },
  {
    name: "Barak Obama",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG87GfxFElmZYx0Q8WLBR871p7sf5l_VTarQ&s",
    rating: 3,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Atlas Corridgan",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    rating: 4,
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and cooked just right. The selection of sauces is outstanding. They are served with carrots and celery, and a delicious house ranch dip.",
  },
];

const CustomerFeedback = () => {
  return (
    <Card
      type="inner"
      title={<h2 style={{ color: "#fff" }}>Customer's Feedback</h2>}
      className="feedbackCard"
      headStyle={{ borderBottom: "none" }}
    >
      <List
        itemLayout="horizontal"
        className="feedbackList"
        dataSource={feedbacks}
        renderItem={(item) => (
          <List.Item
            style={{ borderBottom: "1px solid #fff", marginBottom: "5px" }}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={
                <span style={{ color: "#fff", fontSize: "18px" }}>
                  {item.name}
                </span>
              }
              description={
                <>
                  <Rate
                    disabled
                    defaultValue={item.rating}
                    style={{ marginBottom: "5px" }}
                    className="custom-rate"
                  />
                  <div className="font-color" style={{ marginBottom: "10px" }}>
                    {item.feedback}
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default CustomerFeedback;
