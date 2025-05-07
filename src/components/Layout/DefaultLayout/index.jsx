import React from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
// layout DefaultLayout has a header, left sidebar, right sidebar and content area
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <LeftSidebar />
        <div className="content">{children}</div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default DefaultLayout;
