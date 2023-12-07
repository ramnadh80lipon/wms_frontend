import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Update from "./components/PRODUCT_CRUD/Update"; 
import ListUser from "./ListUser";
import Product from "./components/product";
import Navbar from "./components/Navbar.jsx"; 
import "./App.css";
import Catalog from "./components/PRODUCTS/Catalog";

// import Listproduct from "./components/PRODUCT_CRUD/Listproduct";
import AddVendor from "./components/purchases/AddVendor";
import VendorProvider from "./components/purchases/vendor/VendorProvider";
import AddSales from "./components/sales/AddSales";
import AddNewCustomer from "./components/customer/AddNewCustomer";
import ProductDetails from "./components/PRODUCTS/productdetails/ProductDetails";
import Vendor from "./components/purchases/vendor/Vendor";
import PurchaseOrder from "./components/purchases/purchaseorders/PurchaseOrder";
import PurchaseReceives from "./components/purchases/purchasereceives/PurchaseReceives";
import PurchaseBills from "./components/purchases/purchasebills/PurchaseBills";
import AddPurchaseOrders from "./components/purchases/addpurchaseorder/AddPurchaseOrder";
import AddPurchaseBills from "./components/purchases/addpurchasebills/AddPurchaseBills";
import ProductDetailsEdit from "./components/PRODUCTS/productdetailsedit/ProductDetailsEdit";
import AddProduct from "./components/PRODUCTS/addproduct/AddProduct";
import ManualWarehouse from "./components/warehouses/manualwarehouse/ManualWarehouse.jsx";
import VirtualWarehouse from "./components/warehouses/virtualwarehouse/VirtualWarehouse.jsx";
import WarehouseA from "./components/warehouses/manualwarehouse/warehousea/WarehouseA.jsx";
import WarehouseB from "./components/warehouses/manualwarehouse/warehouseb/WarehouseB.jsx";
import WarehouseC from "./components/warehouses/manualwarehouse/warehousec/WarehouseC.jsx";
import AmazonWarehouse from "./components/warehouses/virtualwarehouse/amazonwarehouse/AmazonWarehouse.jsx";
import NoonWarehouse from "./components/warehouses/virtualwarehouse/noon/NoonWarehouse.jsx";
import Logistic from "./components/logistic/Logistic.jsx";
import Warehouse from "./components/warehouses/warehouse/Warehouse.jsx";
import InventoryItems from "./components/Inventory/InventoryItems.jsx";
import Fastcoo from "./components/logistic/fastcoo/Fastcoo.jsx";
import LogisticEdit from "./components/logistic/logisticedit/LogisticEdit.jsx";
import LogisticAdd from "./components/logistic/logisticadd/LogisticAdd.jsx";
import Reports from "./components/reports/Reports.jsx";
import Profile from "./components/Profile/Profile.jsx"


// import Registration from './components/Registration/Registration';
// import Login from './components/Login/Login';
// import Update from './components/PRODUCT_CRUD/Update';
// import ListUser from './ListUser';
// import Product from './components/Product_listing/product';
// import Navbar from './components/Navbar.jsx'; // Import your Navbar component
// import './App.css';
// import Catalog from './components/PRODUCTS/Catalog';
// import Listproduct from './components/PRODUCT_CRUD/Listproduct';
// import AddVendor from './components/purchases/AddVendor.jsx';
// import AddSales from './components/sales/AddSales';
// import AddNewCustomer from './components/customer/AddNewCustomer';
// import ProductDetails from './components/Product_listing/ProductDetails.jsx';
function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Product />} />
            {/* <Route path="/listProduct" element={<Listproduct />} /> */}
            <Route path="/vendor" element={<Vendor />} />
            <Route path="/addVendor" element={<AddVendor />} />
            <Route path="/products" element={<Catalog />} />
            <Route path="/update" element={<Update />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/addnewcustomer" element={<AddNewCustomer />} />
            <Route path="/addSalesOrder" element={<AddSales />} />
            <Route path="/product/:product_uuid" element={<ProductDetails />} />
            <Route path="/purchaseorder" element={<PurchaseOrder />} />
            <Route path="/purchasereceive" element={<PurchaseReceives />} />
            <Route path="/purchasebills" element={<PurchaseBills />} />

            <Route path="/addpurchaseorder" element={
            <VendorProvider>

              <AddPurchaseOrders />
            </VendorProvider>
            } />
            <Route path="/addpurchasebills" element={<AddPurchaseBills />} />
            <Route path="/editproductdetails/:product_uuid" element={<ProductDetailsEdit />}/>
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/inventory/items" element={<InventoryItems/>} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/physicalwarehouse" element={<ManualWarehouse />} />
            <Route path="/virtualwarehouse" element={<VirtualWarehouse />} />
            <Route path="/amazonwarehouse" element={<AmazonWarehouse/>} />
            <Route path="/noonwarehouse" element={<NoonWarehouse />} />
            <Route path="/warehousea" element={<WarehouseA />} />
            <Route path="/warehouseb" element={<WarehouseB />} />
            <Route path="/warehousec" element={<WarehouseC />} />
            <Route path="/logistic" element={<Logistic />}/>
            <Route path="/fastcoo" element={<Fastcoo />}/>
            <Route path="/logisticedit" element={<LogisticEdit />}/>
            <Route path="/logisticadd" element={<LogisticAdd />}/>
            <Route path="/bussinessanalytics" element={<Reports />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;