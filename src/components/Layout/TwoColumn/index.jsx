import React from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
const TwoColumn = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <LeftSidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default TwoColumn;
