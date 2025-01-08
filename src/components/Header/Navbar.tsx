'use client';
import { useState } from 'react';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import Link from 'next/link';
import styles from "./style.module.css";
import { listItemNavs } from './helper';
import { IconArrowNext, IconClose, IconMenu } from '@/assets';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hanldClickOpenMenu = (menu: string) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className={cn(styles.container, "w-full p-5 text-xs")}>
      <div className={cn(styles.wrapper, "flex flex-row justify-center items-center gap-[3.2rem]")}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <Image
              src={'/Logo.png'}
              alt="Logo"
              className={cn(styles.logo, "max-[800px]:w-[50px] max-[800px]:h-[50px]")}
              width={80}
              height={80}
            />
          </Link>
        </div>

        <div className={cn(styles.nav, "")}>
          <div className={cn(styles.navInner, "")}>
            <ul className={cn(styles.navItems, isMenuOpen ? styles.active : '', "flex justify-center items-center flex-row gap-5")}>
              {listItemNavs.map((menu, index) => (
                <li key={index}
                  onClick={() => hanldClickOpenMenu(menu.label)}
                  className="">
                  <Link href={menu.href} className="flex justify-center items-center flex-row gap-1 ">
                    <p>{menu.label}</p>
                    <span className={`inline-block transition-transform duration-300 ease 
                        ${openMenu === menu.label && 'rotate-180'
                      } `}
                    >
                      {menu.hasDropdown && <IconArrowNext />}
                    </span>
                  </Link>
                  {openMenu === menu.label && menu.itemNavs.length > 0 && (
                    <ul className={styles.dropdown}>
                      {menu.itemNavs.map((subItem, subIndex) => (
                        <li key={subIndex} className={cn(styles.subMenu, "flex justify-center items-start flex-col w-full m-3")}>
                          <Link href={subItem.href} className="text-[1rem] py-1 px-4">
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={cn(styles.menuIcon, "hidden")}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IconClose /> : <IconMenu />}
        </div>


      </div>
    </div >
  );

};

export default Navbar;
