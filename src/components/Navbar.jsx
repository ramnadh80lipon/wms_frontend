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
  ShoppingCartOutlined,
  UserAddOutlined,
  LineChartOutlined,
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
    <div
      className="nav-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,

        width: "256px",
        // Semi-transparent background
        overflowY: "none", // Add scroll if content overflows
      }}
    >
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
        <div
          style={{
            height: "100%",
          }}
        >
          <Menu
            theme="dark"
            className="custom-menu"
            defaultSelectedKeys={["1"]}
            mode="inline"
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FundOutlined />}>
              <Link to="/products" style={{ textDecoration: "none" }}>
                Products
              </Link>
            </Menu.Item>

            <Menu.SubMenu
              key="purchase"
              icon={<BulbOutlined />}
              title="Purchase"
            >
              <Menu.Item key="vendors">
                <Link to="/addVendor" style={{ textDecoration: "none" }}>
                  Vendors
                </Link>
              </Menu.Item>
              <Menu.Item key="purchase-orders">
                <Link to="/purchase-orders" style={{ textDecoration: "none" }}>
                  Purchase Orders
                </Link>
              </Menu.Item>
              <Menu.Item key="purchase-receives">
                <Link
                  to="/purchase-receives"
                  style={{ textDecoration: "none" }}
                >
                  Purchase Receives
                </Link>
              </Menu.Item>
              <Menu.Item key="purchase-bills">
                <Link to="/purchase-bills" style={{ textDecoration: "none" }}>
                  Purchase Bills
                </Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu
              key="sales"
              icon={<ShoppingCartOutlined />}
              title="Sales"
            >
              <Menu.Item key="addnewcustomer" icon={<UserAddOutlined />}>
                <Link to="/addnewcustomer" style={{ textDecoration: "none" }}>
                  Customer
                </Link>
              </Menu.Item>
              <Menu.Item key="sales-order" icon={<LineChartOutlined />}>
                <Link to="/addSalesOrder" style={{ textDecoration: "none" }}>
                  Sales Orders
                </Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item key="3" icon={<BulbOutlined />}>
              <Link to="/news" style={{ textDecoration: "none" }}>
                Warehouse
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BulbOutlined />}>
              <Link to="/news" style={{ textDecoration: "none" }}>
                Logistics
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<BulbOutlined />}>
              <Link to="/news" style={{ textDecoration: "none" }}>
                Finances
              </Link>
            </Menu.Item>

            {user ? (
              <Menu.Item key="6" icon={<UserOutlined />}>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  Profile
                </Link>
              </Menu.Item>
            ) : (
              <Menu.Item key="7" icon={<LogoutOutlined />}>
                <Link to="/signin" style={{ textDecoration: "none" }}>
                  LogIn
                </Link>
              </Menu.Item>
            )}
            {isLoggedIn && (
              <Menu.Item key="8" icon={<LogoutOutlined />} onClick={onLogout}>
                Logout
              </Menu.Item>
            )}
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Navbar;
