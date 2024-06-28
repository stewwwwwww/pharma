import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/companyLogo.png";
import dashboardwhite from "../assets/darhboardwhite.png";
import dashboardblack from "../assets/darhboardblack.png";
import closeWhite from "../assets/closeWhite.png";
import close from "../assets/close.png";
import chevronDown from "../assets/chevron-down.png";
import classNames from "classnames";
import bagwhite from "../assets/bagwhite.png";
import bagblack from "../assets/bagblack.png";
import deleteIcon from "../assets/delete.svg";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const NavBar = () => {
  const params = useParams();
  const [scrollY, setScrollY] = useState(0);
  const [dashboardVisibility, setDashboardVisibility] = useState(false);
  const [aboutUsVisibility, setAboutUsVisibility] = useState(false);
  const [productVisibility, setProductVisibility] = useState(false);
  const [insightVisibility, setInsightVisibility] = useState(false);
  const [cartVisibility, setCartVisibility] = useState(false);

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
  const handleCloseCart = () => {
    setCartVisibility(false);
  };
  const handleOpenCart = () => {
    setCartVisibility(true);
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
  };
  return (
    <div>
      <div
        className={classNames(
          "fixed z-[100] flex h-full w-full items-center justify-center bg-gray-600 bg-opacity-35",
          { block: cartVisibility, hidden: !cartVisibility },
        )}
      >
        <div className="z-[101] m-auto flex h-full w-full flex-col justify-between bg-white sm:h-auto sm:w-[35rem] sm:overflow-hidden sm:rounded-md">
          <div className="flex justify-between border-b-2 px-6 py-4">
            <h4 className="">Your Shopping Cart</h4>
            <img
              src={close}
              className="h-10 w-10 cursor-pointer p-2"
              onClick={handleCloseCart}
            />
          </div>
          <div className="flex h-full flex-col gap-4 px-6 py-4 sm:h-96">
            <div className="flex items-center justify-between">
              <div className="">
                <h5>Gamucid</h5>
                <p>100.000VND x 10 = 1.000.000VND</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1 rounded-[0.625rem] border-[0.15rem] border-[#00378A] px-3 py-2">
                  <h5>10</h5>
                  <div className="ml-2 flex flex-col justify-center gap-[0.35rem]">
                    <div
                      class="h-0 w-0 border-b-[10.5px] border-l-[7px]
                    border-r-[7px] border-black border-l-transparent border-r-transparent"
                    ></div>
                    <div
                      class="h-0 w-0 border-l-[7px] border-r-[7px] 
                  border-t-[10.5px] border-black border-l-transparent border-r-transparent"
                    ></div>
                  </div>
                </div>
                <img src={deleteIcon} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <h5>Gamucid</h5>
                <p>100.000VND x 10 = 1.000.000VND</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1 rounded-[0.625rem] border-[0.15rem] border-[#00378A] px-3 py-2">
                  <h5>10</h5>
                  <div className="ml-2 flex flex-col justify-center gap-[0.35rem]">
                    <div
                      class="h-0 w-0 border-b-[10.5px] border-l-[7px]
                    border-r-[7px] border-black border-l-transparent border-r-transparent"
                    ></div>
                    <div
                      class="h-0 w-0 border-l-[7px] border-r-[7px] 
                  border-t-[10.5px] border-black border-l-transparent border-r-transparent"
                    ></div>
                  </div>
                </div>
                <img src={deleteIcon} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <h5>Gamucid</h5>
                <p>100.000VND x 10 = 1.000.000VND</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1 rounded-[0.625rem] border-[0.15rem] border-[#00378A] px-3 py-2">
                  <h5>10</h5>
                  <div className="ml-2 flex flex-col justify-center gap-[0.35rem]">
                    <div
                      class="h-0 w-0 border-b-[10.5px] border-l-[7px]
                    border-r-[7px] border-black border-l-transparent border-r-transparent"
                    ></div>
                    <div
                      class="h-0 w-0 border-l-[7px] border-r-[7px] 
                  border-t-[10.5px] border-black border-l-transparent border-r-transparent"
                    ></div>
                  </div>
                </div>
                <img src={deleteIcon} />
              </div>
            </div>
          </div>
          <div className="flex h-24 justify-between border-t-2 px-6 py-4">
            <div className="grid grid-cols-2 grid-rows-2 gap-x-3">
              <h5>Taxes + Fee: </h5>
              <h5>160.000VND</h5>
              <h5>SubTotal: </h5>
              <h5>3.160.000VND</h5>
            </div>
            <button
              className={
                "hidden h-16 w-[10.25rem] rounded-md bg-[#00378A] text-white lg:block"
              }
            >
              <a href="http://localhost:3000/">Order</a>
            </button>
          </div>
        </div>
      </div>
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
                    <img className="w-6" src={chevronDown} />
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
        <div
          className={classNames("hidden lg:flex", {
            "text-white": scrollY === 0,
            "text-[#00183C]": scrollY !== 0,
          })}
        >
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
        <div className="flex items-center gap-7 cursor-pointer" onClick={handleOpenCart}>
          <div className="relative">
            <img
              src={scrollY === 0 ? bagwhite : bagblack}
              alt="dashboard"
              className="h-9 w-9"
            ></img>
            <p className="absolute bottom-[1.125rem] left-[1.225rem] rounded-lg bg-[#00378A] px-[0.475rem] py-[0.2rem] text-center text-sm text-white">
              22
            </p>
          </div>

          <img
            src={scrollY === 0 ? dashboardwhite : dashboardblack}
            alt="dashboard"
            className="h-9 w-9 cursor-pointer lg:hidden"
            onClick={handleOpenNavBar}
          ></img>
          <button
            className={classNames(
              "hidden h-16 w-[11rem] rounded-[2rem] border-[0.1rem] border-white text-white lg:block",
              {
                "bg-transparent": scrollY === 0,
                "bg-[#00378A]": scrollY !== 0,
              },
            )}
          >
            <a href="http://localhost:3000/">Contact us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
