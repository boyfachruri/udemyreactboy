import React from "react";
import PropTypes from "prop-types";
import {Link}  from "react-router-dom";

const NavbarCom = ({icon, title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

NavbarCom.defaultProps = {
  title: "Nekopoi Finder",
  icon: "fab fa-github",
};
NavbarCom.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};


export default NavbarCom;
