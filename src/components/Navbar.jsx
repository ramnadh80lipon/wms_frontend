import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  DollarOutlined,
  MenuOutlined,
  LogoutOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  LineChartOutlined,
  AppstoreAddOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  TeamOutlined,
  
} from "@ant-design/icons";
import { MdEditNote,MdDescription,MdLocalShipping,MdAssignmentAdd,MdLogin,MdOutlineStorage,MdStorefront,MdCategory } from 'react-icons/md';




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
        overflow:"auto",
        scrollbarWidth:"thin",

        width: "256px",
        // Semi-transparent background
        overflowY: "auto", 
        // Add scroll if content overflows
       
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
            <Menu.Item
              key="2"
              icon={<MdCategory style={{ fontSize: "1.2rem" }} />}
            >
              <Link to="/products" style={{ textDecoration: "none" }}>
                Products
              </Link>
            </Menu.Item>

            <Menu.SubMenu
              key="purchase"
              icon={<ShoppingCartOutlined />}
              title="Purchase"
            >
              <Menu.Item
                key="vendors"
                icon={<TeamOutlined style={{ fontSize: "1rem" }} />}
              >
                <Link to="/addVendor" style={{ textDecoration: "none" }}>
                  Vendors
                </Link>
              </Menu.Item>
              <Menu.Item
                key="purchase-orders"
                icon={<MdDescription style={{ fontSize: "1rem" }} />}
              >
                <Link to="/purchase-orders" style={{ textDecoration: "none" }}>
                  Purchase Orders
                </Link>
              </Menu.Item>
              <Menu.Item
                key="purchase-receives"
                icon={<MdAssignmentAdd style={{ fontSize: "1rem" }} />}
              >
                <Link
                  to="/purchase-receives"
                  style={{ textDecoration: "none" }}
                >
                  Purchase Receives
                </Link>
              </Menu.Item>
              <Menu.Item
                key="purchase-bills"
                icon={<MdDescription style={{ fontSize: "1rem" }} />}
              >
                <Link to="/purchase-bills" style={{ textDecoration: "none" }}>
                  Purchase Bills
                </Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu
              key="sales"
              icon={<LineChartOutlined />}
              title="Sales"
            >
              <Menu.Item key="addnewcustomer" icon={<UserAddOutlined />}>
                <Link to="/addnewcustomer" style={{ textDecoration: "none" }}>
                  Customer
                </Link>
              </Menu.Item>
              <Menu.Item
                key="sales-order"
                icon={<MdEditNote style={{ fontSize: "1.2rem" }} />}
              >
                <Link to="/addSalesOrder" style={{ textDecoration: "none" }}>
                  Sales Orders
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="inventory"
              icon={<MdOutlineStorage style={{ fontSize: "1rem" }} />}
              title="Inventory"
            >
              <Menu.Item key="item" icon={<AppstoreAddOutlined />}>
                <Link to="/items" style={{ textDecoration: "none" }}>
                  Items
                </Link>
              </Menu.Item>
              <Menu.Item key="itemgroups" icon={<UnorderedListOutlined />}>
                <Link to="/items" style={{ textDecoration: "none" }}>
                  Item Groups
                </Link>
              </Menu.Item>
              <Menu.Item key="inventoryadjustment" icon={<SettingOutlined />}>
                <Link
                  to="/inventoryadjustment"
                  style={{ textDecoration: "none" }}
                >
                  Inventory Adjustment
                </Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item
              key="3"
              icon={<MdStorefront style={{ fontSize: "1.2rem" }} />}
            >
              <Link to="/news" style={{ textDecoration: "none" }}>
                Warehouse
              </Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<MdLocalShipping style={{ fontSize: "1.2rem" }} />}
            >
              <Link to="/news" style={{ textDecoration: "none" }}>
                Logistics
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<DollarOutlined />}>
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
              <Menu.Item
                key="7"
                icon={<MdLogin style={{ fontSize: "1.2rem" }} />}
              >
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
