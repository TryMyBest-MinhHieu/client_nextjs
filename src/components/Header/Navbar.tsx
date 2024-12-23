"use client";
import { IconArrowNext, IconClose, IconMenu } from "@/assets";
import Link from "next/link";
import { useState } from "react";
import styles from "./style.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { listItemNavs } from "./helper";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMouseEnter = (menu: string) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-full">
      <div
        className={cn(styles.DotMenu, "flex items-center md:hidden")}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <IconClose /> : <IconMenu />}
      </div>
      {/* Menu */}
      <div className=" flex items-center w-full h-full bg-transparent">
        <div className={"w-[15%] flex justify-end"}>
          <Image
            src={"/Logo.png"}
            alt="Logo"
            className={styles.logo}
            width={50}
            height={50}
          />
        </div>
        <ul className={cn(styles.navbar, isMenuOpen ? styles.active : "")}>
          {listItemNavs.map((menu, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(menu.label)}
              onMouseLeave={handleMouseLeave}
              className="group subItemNav"
            >
              <Link href={menu.href} className="flex flex-row gap-1">
                <p className="text-sm">{menu.label}</p>
                <span className="w-4 h-4 inline-block transition-transform duration-300 ease group-hover:rotate-180">
                  {menu.hasDropdown && <IconArrowNext />}
                </span>
              </Link>
              {openMenu === menu.label && menu.itemNavs.length > 0 && (
                <ul className={styles.dropdown}>
                  {menu.itemNavs.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.href} className="text-sm">
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="w-[15%]" />
      </div>
    </nav>
  );
};

export default Navbar;
