import React from "react";

const NavLink = ({ href, children, isMobile, ...props }) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default NavLink;
