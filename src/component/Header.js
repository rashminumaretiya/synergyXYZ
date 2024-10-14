"use client";
import { Nav, Navbar } from "react-bootstrap";
import { GlobIcon } from "../shared/icon";
import SYButton from "../shared/SYButton.jsx";
import Logo from "../assets/image/svg/logo.svg";
import SYContainer from "../shared/SYContainer";
import Image from "next/image";

const menuList = [
  { label: " Services", badge: 10, href: "/services" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="header">
      <SYContainer>
        <div className="d-flex align-items-center justify-content-between">
          <Image src={Logo} alt="logo" />
          <Navbar expand="lg" className="p-0 align-items-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                {menuList?.map((menu, menuIndex) => (
                  <Nav.Link
                    href={menu.href}
                    key={menuIndex}
                    className="p-0 py-1"
                  >
                    {menu?.label}
                    {menu.badge && (
                      <span className="menu-badge">{menu.badge}</span>
                    )}
                  </Nav.Link>
                ))}
                <GlobIcon />
              </Nav>
            </Navbar.Collapse>
            <SYButton className="ms-3 d-sm-block d-none">
              Start a project
            </SYButton>
          </Navbar>
        </div>
      </SYContainer>
    </header>
  );
};

export default Header;
