"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import ReactSelect from "react-select";
import Logo from "../assets/image/svg/logo.svg";
import {
  CloseIcon,
  GlobIcon,
  MenuArrow,
  MenuDownArrow,
  MenuIcon,
} from "../shared/icon";
import SYButton from "../shared/SYButton.jsx";
import SYContainer from "../shared/SYContainer";
import styles from "./Header.module.scss";

const menuList = [
  {
    label: " Services",
    badge: 10,
    href: "/services",
    subMenu: [
      { label: "Branding", btn: true, link: "/services/branding" },
      { label: "Creative Content", link: "/services/content-strategy" },
      { label: "Media Services", link: "/services/creative-content" },
      { label: "Content Strategy", link: "/services/media" },
      { label: "Commerce & eCommerce", link: "/services/commerce-e-commerce" },
      {
        label: "Customer Relationship Management (CRM)",
        link: "/services/customer-relationship-management",
      },
      { label: "Partnership", link: "/services/partnership" },
      { label: "Events & Activations", link: "/services/events-activations" },
      { label: "Data Analytics", link: "/services/data-analytics" },
      { label: "Tech", link: "/services/technology" },
    ],
  },
  { label: "Our Approach", href: "our-approach" },
  { label: "About Us", href: "about" },
  { label: "Contact", href: "contact" },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  // Language select
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "th", label: "Thailand" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
  };

  // Select Style
  const customStyles = {
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
    }),
    container: (provided, state) => ({
      ...provided,
      margin: "0 32px",
      borderTop: `1px solid #636466`,
      padding: "8px 0",
      borderBottom: `1px solid #636466`,
    }),
    control: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      backgroundColor: "transparent",
      border: 0,
      borderRadius: 0,
      boxShadow: "none",
      flexDirection: "row-reverse",
      "&:hover": {
        borderColor: "#636466",
      },
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#010202",
    }),
    menu: (provided, state) => ({
      ...provided,
      width: "100%",
      margin: "9px 0 0 0",
      position: "static",
      border: 0,
      boxShadow: 0,
      borderRadius: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#2E31921a"
        : state.isFocused
          ? "#2E319210"
          : "#ffffff",
      color: state.isSelected ? "#2E3192" : "#424143",
      padding: "10px 16px",
      lineHeight: "24px",
      "&:active": {
        backgroundColor: "#2E319230",
      },
    }),
  };
  const CustomDropdownIndicator = (props) => <GlobIcon />;

  return (
    <header className="position-relative">
      <div className={`${styles.header} ${styles.fixedTop}`}>
        <SYContainer>
          <div className="d-flex align-items-center justify-content-between">
            <Link href="/">
              <Image src={Logo} alt="logo" className={styles.logo} />
            </Link>
            <Navbar expand="lg" className="p-0 align-items-center">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className={styles.menuToggleBtn}
              >
                <MenuIcon />
              </Navbar.Toggle>
              <Navbar.Collapse
                className={`${styles.navCollapse}`}
                id="basic-navbar-nav"
              >
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className={styles.closeIcon}
                >
                  <CloseIcon />
                </Navbar.Toggle>
                <Nav className={`align-items-center ${styles.navbarNav}`}>
                  {menuList?.map((menu, menuIndex) => (
                    <div key={menuIndex} className="position-relative w-100">
                      <div className={styles.navLinkWrapper}>
                        <Link href={menu.href} className={styles.navLink}>
                          {menu?.label}

                          {menu.badge && (
                            <span className={styles.menuBadge}>
                              {menu.badge}
                            </span>
                          )}
                        </Link>
                        {menu.badge && (
                          <div
                            className={`d-flex d-lg-none ${styles.arrow}`}
                            onClick={handleToggle}
                          >
                            <MenuDownArrow />
                          </div>
                        )}
                        {menu?.badge && (
                          <>
                            <div
                              className={`${styles.dropdownMainWrapper} ${isActive ? styles.menuOpen : ""}`}
                            >
                              <div className={styles.dropdownMenuMain}>
                                <div className={styles.arrow}>
                                  <MenuArrow />
                                </div>
                                <div className={styles.dropdownMenuWrapper}>
                                  {menu?.subMenu?.map((subList, listIndex) => {
                                    return (
                                      <NavDropdown.Item
                                        as="div"
                                        key={listIndex}
                                      >
                                        <Link href={subList.link}>
                                          {subList?.label}
                                        </Link>
                                        {/* {subList?.btn && (
                                        <SYButton variant="outline" hideArrow>
                                          See all
                                          <RightArrow />
                                        </SYButton>
                                      )} */}
                                      </NavDropdown.Item>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                  <div
                    className={`d-block d-lg-none w-100 ${styles.selectWrapper}`}
                  >
                    <ReactSelect
                      styles={customStyles}
                      value={selectedLanguage}
                      onChange={handleChange}
                      options={languageOptions}
                      placeholder="Language"
                      components={{
                        DropdownIndicator: CustomDropdownIndicator,
                      }}
                      isSearchable={false}
                    />
                    <div className={styles.downArrow}>
                      <MenuDownArrow />
                    </div>
                  </div>
                  <div className="d-none d-lg-block">
                    <GlobIcon />
                  </div>
                </Nav>
                <SYButton className="ms-3">Start a project</SYButton>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </SYContainer>
      </div>
    </header>
  );
};

export default Header;
