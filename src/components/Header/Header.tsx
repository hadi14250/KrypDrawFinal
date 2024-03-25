"use client";
import { useEffect, useRef, useState } from "react";
import "./header.css";
import Link from "next/link";
import Image from "next/image";
import DropdownUser from "../DropDownUser/DropDownUser";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkNav, setDarkNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [index, setIndex] = useState(-1);
  const dropdown = useRef(null);
  const profileTrigger = useRef<any>(null);
  const profileDropdown = useRef<any>(null);
  const trigger = useRef<any>(null);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setDropdownOpen(false);
  };

  const links = [
    {
      name: "Shop",
      path: "/shop",
    },
    // {
    //   name: "Tokenomics",
    //   path: "/tokenomics",
    // },
    // {
    //   name: "Roadmap",
    //   path: "/roadmap",
    // },
    {
      name: "Draws",
      path: "/draws",
    },
  ];

  const onScroll = () => {
    if (window.scrollY > 50) {
      setDarkNav(true);
    } else {
      setDarkNav(false);
    }
  };

  const clickHandler = ({ target }: MouseEvent) => {
    if (!dropdown.current || !profileDropdown.current) return;
    if (
      dropdown.current.contains(target) ||
      profileTrigger.current.contains(target) ||
      trigger.current.contains(target)
    )
      return;
    if (dropdown.current.contains(target)) return;
    setIsMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (window.scrollY > 50) {
      setDarkNav(true);
    } else {
      setDarkNav(false);
    }
    window.addEventListener("scroll", onScroll);
    document.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  useEffect(() => {
    if (session && session.error === "Session Expired") {
      signOut();
    }
  }, [session]);

  useEffect(() => {
    setIndex(links.findIndex((link) => link.path === pathname));
  }, [pathname]);

  return (
    <>
      <div
        style={{
          background: darkNav ? "rgba(21, 17, 44, 0.5)" : "transparent",
        }}
        className="w-full flex justify-center items-center fixed z-[999]"
      >
        <div className="flex justify-between items-center px-5 md:px-10 lg:px-20 max-w-[1400px] w-full z-[9999]">
          <Link className="header-link inline" href="/">
            <Image
              unoptimized={true}
              src="/static/images/logo.svg"
              alt="site logo"
              className="p-3"
              width={100}
              height={100}
            />
          </Link>
          <nav>
            <ul
              style={{
                background: "transparent",
              }}
              className="header-large gap-7 flex items-center transition-all duration-500 ease-in-out"
            >
              {links.map((link, linkIndex) => {
                return (
                  <li
                    style={{
                      color: index === linkIndex ? "#FF0094" : "white",
                    }}
                    key={linkIndex}
                    className={`nav-item`}
                  >
                    <Link className="nav-link" href={link.path}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center">
            {status === "loading" ? (
              <p>Loading ...</p>
            ) : status === "authenticated" ? (
              <DropdownUser
                setDropdownOpen={setDropdownOpen}
                dropdownOpen={dropdownOpen}
                dropdown={profileDropdown}
                trigger={profileTrigger}
              />
            ) : (
              <Link className="nav-link" href="/login">
                Sign in
              </Link>
            )}
            <button
              ref={trigger}
              className="header-menu ml-5"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faBars} size="2x" color="white" />
            </button>
          </div>
        </div>
      </div>
      <nav>
        <ul
          ref={dropdown}
          style={{
            background: "rgba(21, 17, 44, 0.85)",
          }}
          className={
            `nav-list transition-all duration-500 ease-in-out ` +
            (isMobileMenuOpen ? "active" : "")
          }
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-start px-5"
          >
            <FontAwesomeIcon icon={faX} className="text-[18px]" />
          </button>
          {links.map((link, linkIndex) => {
            return (
              <li
                style={{
                  color: index === linkIndex ? "#FF0094" : "white",
                }}
                key={linkIndex}
                className={`nav-item mr-[30px]`}
              >
                <Link className="nav-link" href={link.path}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
