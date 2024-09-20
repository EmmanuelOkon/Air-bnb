import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-400 h-screen">
      {children}

      <p>this is a custom page</p>
    </div>
  );
};

export default Layout;
