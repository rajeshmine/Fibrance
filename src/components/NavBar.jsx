import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const menuData = [
  { name: "Home", path: "/" },
  {
    name: "Collections",
    path: "/collections",
    submenu: [
      { name: "Sarees", path: "/collections/sarees" },
      { name: "Salwar Material", path: "/collections/salwar-material" },
      { name: "Dupattas", path: "/collections/dupattas" },
    ],
  },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="nav">
      <ul className="nav-menu">
        {menuData.map((item, index) => (
          <li
            key={item.name}
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
              end={!item.submenu}
            >
              {item.name}
            </NavLink>
            {item.submenu && (
              <ul
                className={`dropdown-menu ${
                  openDropdown === index ? "show" : ""
                }`}
              >
                {item.submenu.map((subItem) => (
                  <li key={subItem.name} className="dropdown-item">
                    <NavLink
                      to={subItem.path}
                      className={({ isActive }) =>
                        isActive ? "navlink active" : "navlink"
                      }
                    >
                      {subItem.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
