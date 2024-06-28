import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/companyLogo.png";
import dashboardwhite from "../assets/darhboardwhite.png";
import dashboardblack from "../assets/darhboardblack.png";
import close from "../assets/close.png";
import chevronDown from "../assets/chevron-down.png";
import classNames from "classnames";

import { useEffect, useRef, useState } from "react";
const StaticNavBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [dashboardVisibility, setDashboardVisibility] = useState(false);
  const [aboutUsVisibility, setAboutUsVisibility] = useState(false);
  const [productVisibility, setProductVisibility] = useState(false);
  const [insightVisibility, setInsightVisibility] = useState(false);

  const [expandedSection, setExpandedSection] = useState("");

  const dashboardListRef = useRef(null);
  const dashboardAboutUs = useRef(null);
  const dashboardProduct = useRef(null);
  const dashboardInsight = useRef(null);

  const navAboutUs = useRef(null);
  const navProduct = useRef(null);
  const navInsight = useRef(null);

  useEffect(() => {
    const handleScrollY = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  const navList = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/AboutUs",
      dashboardRef: dashboardAboutUs,
      navRef: navAboutUs,
      dropdownVisibility: aboutUsVisibility,
      dropdown: [
        { name: "Our Team", href: "/AboutUs/OurTeam" },
        { name: "FAQ", href: "/AboutUs/FAQ" },
        { name: "Join Us", href: "/AboutUs/JoinUs" },
        { name: "Contact Us", href: "/AboutUs/ContactUs" },
      ],
    },
    {
      name: "Products",
      href: "/Products",
      dashboardRef: dashboardProduct,
      navRef: navProduct,
      dropdownVisibility: productVisibility,
      dropdown: [
        { name: "Medicines", href: "/Products/Medicines" },
        { name: "Supplements", href: "/Products/Supplements" },
        { name: "Cosmetics", href: "/Products/Cosmetics" },
      ],
    },
    {
      name: "Insights",
      dashboardRef: dashboardInsight,
      navRef: navInsight,
      dropdownVisibility: insightVisibility,
      dropdown: [
        { name: "Researchs", href: "/Insights/Researchs" },
        { name: "Articles", href: "/Insights/Articles" },
      ],
    },
    { name: "Our Retailers", href: "/OurRetailers" },
  ];

  const handleCloseNavBar = () => {
    setDashboardVisibility(false);
  };
  const handleOpenNavBar = () => {
    setDashboardVisibility(true);
  };

  const handleToggleSection = (e) => {
    if (
      dashboardAboutUs.current.contains(e.target) &&
      expandedSection !== "About Us"
    ) {
      setExpandedSection("About Us");
    } else if (
      dashboardProduct.current.contains(e.target) &&
      expandedSection !== "Products"
    ) {
      setExpandedSection("Products");
    } else if (
      dashboardInsight.current.contains(e.target) &&
      expandedSection !== "Insights"
    ) {
      setExpandedSection("Insights");
    } else {
      setExpandedSection("none");
    }
  };
  const handleShowDropdown = (e) => {
    if (navAboutUs.current && navAboutUs.current.contains(e.target)) {
      setAboutUsVisibility(true);
    } else if (navProduct.current && navProduct.current.contains(e.target)) {
      setProductVisibility(true);
    } else if (navInsight.current && navInsight.current.contains(e.target)) {
      setInsightVisibility(true);
    }
  };
  const handleHideDropdown = (e) => {
    if (navAboutUs.current && navAboutUs.current.contains(e.target)) {
      setAboutUsVisibility(false);
    } else if (navProduct.current && navProduct.current.contains(e.target)) {
      setProductVisibility(false);
    } else if (navInsight.current && navInsight.current.contains(e.target)) {
      setInsightVisibility(false);
    }
    console.log(e.target);
  };
  return (
    <div>
      <div
        className={classNames(
          "no-scrollbar scroll fixed z-40 h-screen w-[18rem] overflow-y-auto bg-white",
          {
            block: dashboardVisibility,
            hidden: !dashboardVisibility,
          },
        )}
        onClick={handleToggleSection}
      >
        <div className="flex items-center justify-between p-4">
          <img src={logo} className="w-[4rem]" />
          <img
            className="cursor-pointer"
            src={close}
            onClick={handleCloseNavBar}
          />
        </div>
        <div
          className={classNames(
            "flex  flex-col items-start overflow-hidden p-2 px-6",
          )}
          ref={dashboardListRef}
        >
          {navList.map((item) => {
            if (!("dropdown" in item)) {
              return <Link to={item.href}>{item.name}</Link>;
            } else {
              return (
                <>
                  <div
                    className={classNames("dashboardDropdown w-full", {
                      "[&>*:nth-child(2)]:-rotate-180":
                        expandedSection === item.name,
                    })}
                    onClick={handleToggleSection}
                    ref={item.dashboardRef}
                  >
                    <h5 className="text-[#0183C]">{item.name}</h5>

                    <img src={chevronDown} className="w-6" />
                  </div>
                  <div
                    className={classNames(
                      "ml-4 flex flex-col overflow-hidden text-start transition-[max-height] duration-300 ease-in-out",
                      {
                        "max-h-[20rem]": expandedSection === item.name,
                        "max-h-0": !(expandedSection === item.name),
                      },
                    )}
                  >
                    {item.dropdown.map((dropdownItem) => {
                      return (
                        <Link to={dropdownItem.href} className="py-2">
                          {dropdownItem.name}
                        </Link>
                      );
                    })}
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
      <div
        className={classNames(
          "fixed z-30 flex w-full items-center justify-between px-4 lg:px-12",
          {
            " bg-transparent": scrollY === 0,
            " bg-white": scrollY !== 0,
          },
        )}
      >
        <img src={logo} alt="logo" className="center h-12 w-12"></img>
        <div className="hidden text-[#00183C] lg:flex">
          {navList.map((item) => {
            if (!("dropdown" in item)) {
              return (
                <Link
                  to={item.href}
                  className="navLinkEffects py-8 lg:px-6 xl:px-8 2xl:px-10"
                >
                  {item.name}
                </Link>
              );
            } else {
              return (
                <div
                  onMouseLeave={handleHideDropdown}
                  ref={item.navRef}
                  className="py-8"
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="navLinkEffects lg:px-6 xl:px-8 2xl:px-10"
                      onMouseOver={handleShowDropdown}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <h5
                      className="navLinkEffects lg:px-6 xl:px-8 2xl:px-10"
                      onMouseOver={handleShowDropdown}
                    >
                      {item.name}
                    </h5>
                  )}
                  <div
                    className={classNames(
                      "absolute mt-8 min-w-52 -translate-y-2 rounded-[0.625rem] border-[1px] border-[#6868914b] bg-white px-4 py-5",
                      {
                        block: item.dropdownVisibility,
                        hidden: !item.dropdownVisibility,
                      },
                    )}
                  >
                    <div className="flex flex-col text-start text-black">
                      {item.dropdown.map((dropdownItem) => {
                        return (
                          <Link
                            to={dropdownItem.href}
                            className=" extendLink flex items-center"
                          >
                            <div className="mr-0 h-[2px] w-0 bg-[#00378A]"></div>
                            <h5 className="link p-2">{dropdownItem.name}</h5>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex items-center gap-4">
          <img
            src={dashboardblack}
            alt="dashboard"
            className="h-7 w-7 cursor-pointer lg:hidden"
            onClick={handleOpenNavBar}
          ></img>
          <button className="hidden h-16 w-[11rem] rounded-[2rem] border-[0.1rem] border-white bg-[#00378A] text-white lg:block">
            <a href="http://localhost:3000/">Contact us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaticNavBar;
