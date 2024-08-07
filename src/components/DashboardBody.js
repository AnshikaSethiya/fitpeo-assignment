import { Col, Grid, Layout, Row, Typography } from "antd";
import React from "react";
import ActivityChart from "./ActivityChart";
import CustomerFeedback from "./CustomerFeedback";
import GoalsSection from "./GoalsSection";
import KpiCards from "./KpiCards";
import NetProfitCard from "./NetProfitCard";
import RecentOrdersTable from "./RecentOrdersTable";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";

const { Title } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;

const DashboardBody = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <TopHeader />
        <Content style={{ backgroundColor: "#141416", color: "#f0f2f5" }}>
          <div
            className="site-layout-background"
            style={{ padding: 12, minHeight: 360, backgroundColor: "#141416" }}
          >
            <Title level={2} style={{ color: "#fcfdfd", marginTop: "5px" }}>
              Dashboard
            </Title>
            {/* Dashboard Content */}
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={14}>
                <KpiCards />
              </Col>
              <Col xs={24} sm={24} md={12} lg={10}>
                <NetProfitCard />
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: "8px" }}>
              <Col xs={24} sm={24} md={12} lg={14}>
                <ActivityChart />
              </Col>
              <Col xs={24} sm={24} md={12} lg={10}>
                <GoalsSection />
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: "8px" }}>
              <Col xs={24} sm={24} md={12} lg={14}>
                <RecentOrdersTable />
              </Col>
              <Col xs={24} sm={24} md={12} lg={10}>
                <CustomerFeedback />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardBody;

{
  /* <div className="dashboard-body">
      <h2 className="font-color">Dashboard</h2>
      <div className="main-container">
        <div className="contRight">
          <ActivityChart />
          <KpiCards />
          <RecentOrdersTable />
        </div>
        <div className="contLeft">
          <NetProfitCard />
          <GoalsSection />
          <CustomerFeedback />
        </div>
      </div>
    </div> */
}
