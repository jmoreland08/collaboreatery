import React from "react";
import "./Layout.css";
import Nav from "../Nav/Nav";

const Layout = (props) => (
  <div className="layout">
    <Nav {...props} />
    <div className="layout-children">{props.children}</div>
  </div>
);

export default Layout;
