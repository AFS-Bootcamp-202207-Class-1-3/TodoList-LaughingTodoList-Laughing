import { Link, Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./style.css";
const { Header, Content, Footer } = Layout;
export default function MyLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="Home" title="首页">
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <Menu.Item key="About" title="关于">
            <Link to={"/About"}>About</Link>
          </Menu.Item>
          <Menu.Item key="Done" title="Done">
            <Link to={"/DoneList"}>Done</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ border: "1px solid black" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>Design By Laughing</Footer>
    </Layout>
  );
}
