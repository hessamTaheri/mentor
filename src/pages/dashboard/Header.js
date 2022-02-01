import { Alert, Menu } from "antd";
import {
  MailOutlined,
  MoreOutlined,
  SettingOutlined,
  LoginOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <Menu mode="horizontal">
      {currentUser && (
        <Menu.Item key="profile" icon={<SettingOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
      )}
      {currentUser && (
        <Menu.Item key="request" icon={<MailOutlined />}>
          <Link to="/request">Request</Link>
        </Menu.Item>
      )}
      {currentUser && (
        <Menu.Item key="more" icon={<MoreOutlined />}>
          <Link to="/more">More</Link>
        </Menu.Item>
      )}
        <Menu.Item key="Home" icon={<HomeOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
      {!currentUser && (
        <Menu.Item key="Login" icon={<LoginOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
      {currentUser && (
        <Menu.Item key="Logout" icon={<LogoutOutlined />}>
          <Link
            to="/login"
            onClick={async (e) => {
              e.preventDefault();
              logout();
            }}
          >
            Logout
          </Link>
        </Menu.Item>
      )}
    </Menu>
  );
};
export default Header;
