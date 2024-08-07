import {
  BellOutlined,
  MailOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Input, Layout } from "antd";

const { Header, Content, Sider } = Layout;

const TopHeader = () => {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "#202028",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        style={{ maxWidth: 300, marginLeft: 20 }}
        className="header-input"
      />
      <div style={{ paddingRight: "15px" }}>
        <Badge count={2}>
          <BellOutlined className="header-icon" />
        </Badge>
        <MailOutlined className="header-icon" />
        <SettingOutlined className="header-icon" />
        <Avatar
          className="user-profile"
          size={40}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
        />
      </div>
    </Header>
  );
};

export default TopHeader;
