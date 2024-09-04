import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-between w-full p-5">
      <div className="w-1/2"></div> {/* Empty left side */}
      <div className="w-1/2 flex flex-col items-end">{children}</div>
    </div>
  );
};

export default Layout;
