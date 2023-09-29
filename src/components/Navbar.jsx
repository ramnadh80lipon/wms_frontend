import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import icon from "../icons/icon_1.png";
const Navbar = ({ isLoggedIn, onLogout }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const user = localStorage.getItem("token");
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size={"large"}></Avatar>
        <Typography.Title level={2} className="logo">
          <Link to="/">WMS</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/products">Products</Link>
          </Menu.Item>

          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">purchase</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">Sales</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">Inventory_stocks</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">Warehouse</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">Logistics</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">Finances</Link>
          </Menu.Item>


          {user ? (
            <Menu.Item icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          ) : (
            <Menu.Item icon={<LogoutOutlined />}>
              <Link to="/signin">LogIn</Link>
            </Menu.Item>
          )}
          {isLoggedIn && (
            <Menu.Item icon={<LogoutOutlined />} onClick={onLogout}>
              Logout
            </Menu.Item>
          )}
        </Menu>
      )}
    </div>
  );
};
export default Navbar;