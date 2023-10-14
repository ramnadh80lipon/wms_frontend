import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  LogoutOutlined,
  UserOutlined,
  DownOutlined,
  ShoppingCartOutlined,
  UserAddOutlined ,
  LineChartOutlined,
} from "@ant-design/icons";

import icon from "../icons/icon_1.png";
import { div } from "react-bootstrap";
import SubMenu from "antd/es/menu/SubMenu";
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
  const item = [1, 2, 3];

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
        <Menu theme="dark" className="custom-menu">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/products" style={{ textDecoration: "none" }}>
              Products
            </Link>
          </Menu.Item>

          <SubMenu key="purchase" icon={<BulbOutlined />} title="Purchase">
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
              <Link to="/purchase-receives" style={{ textDecoration: "none" }}>
                Purchase Receives
              </Link>
            </Menu.Item>
            <Menu.Item key="purchase-bills">
              <Link to="/purchase-bills" style={{ textDecoration: "none" }}>
                Purchase Bills
              </Link>
            </Menu.Item>
          </SubMenu>


          <SubMenu key="sales"  title="Sales" icon={<ShoppingCartOutlined/>}>
            <Menu.Item key="addnewcustomer"  icon={<UserAddOutlined />}>
              <Link to="/addnewcustomer" style={{ textDecoration: "none" }}>
                Customer
              </Link>
            </Menu.Item>
            <Menu.Item key="sales"  icon={<LineChartOutlined />}>
              <Link to="/addsales" style={{ textDecoration: "none" }}>
                Sales
              </Link>
            </Menu.Item>
            </SubMenu>

          
          <SubMenu icon={<BulbOutlined />} title={<span>Inventory Stock</span>}>
            <Menu.Item icon={<BulbOutlined />}>
              <Link to="/items" style={{ textDecoration: "none" }}>
                Items
              </Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link to="/items" style={{ textDecoration: "none" }}>
                Item Groups
              </Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link
                to="/Inventory Adjustment"
                style={{ textDecoration: "none" }}
              >
                Inventory Adjustment
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news" style={{ textDecoration: "none" }}>
              Warehouse
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news" style={{ textDecoration: "none" }}>
              Logistics
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news" style={{ textDecoration: "none" }}>
              Finances
            </Link>
          </Menu.Item>

          {user ? (
            <Menu.Item icon={<UserOutlined />}>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                Profile
              </Link>
            </Menu.Item>
          ) : (
            <Menu.Item icon={<LogoutOutlined />}>
              <Link to="/signin" style={{ textDecoration: "none" }}>
                LogIn
              </Link>
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
