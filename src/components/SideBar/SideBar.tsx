import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Image from 'next/image';
import clsx from 'clsx';
const Sidebar = () => {
    const [isLocked, setIsLocked] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleLock = () => {
        setIsLocked((prev) => !prev);
    };

    const toggleSidebar = () => {
        if (!isMobile) return;
        setIsHovered((prev) => !prev);
    };

    useEffect(() => {
        if (window.innerWidth < 750) {
            setIsMobile(true);
            setIsLocked(false);
        }
    }, []);

    return (
        <nav
            className={`${styles.sidebar} ${isLocked ? styles.locked : ""} ${isHovered && !isLocked ? styles.hoverable : ""
                }`}
            onMouseEnter={() => !isLocked && setIsHovered(true)}
            onMouseLeave={() => !isLocked && setIsHovered(false)}
        >
            <div className={`${styles.logo_items} ${styles.flex}`}>
                <span className={styles.nav_image}>
                    <Image
                        src="/Logo.png"
                        alt="logo_img"
                        width={40}
                        height={40}
                    />
                </span>
                <span className={styles.logo_name}>Training</span>
                <i
                    className={`bx ${isLocked ? "bx-lock-alt" : "bx-lock-open-alt"
                        }`}
                    id="lock-icon"
                    title={isLocked ? "Unlock Sidebar" : "Lock Sidebar"}
                    onClick={toggleLock}
                />
                <i
                    className="bx bx-x"
                    id="sidebar-close"
                    onClick={toggleSidebar}
                />
            </div>

            <div className={styles.menu_container}>
                <div className={styles.menu_items}>
                    <ul className={styles.menu_item}>
                        <li className={`${styles.menu_title} ${styles.flex}`}>
                            <span className={styles.title}>Dashboard</span>
                            <span className={styles.line}></span>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={`${styles.link} ${styles.flex}`}>
                                <i className="bx bx-home-alt"></i>
                                <span>Overview</span>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={`${styles.link} ${styles.flex}`}>
                                <i className="bx bx-grid-alt"></i>
                                <span>All Projects</span>
                            </a>
                        </li>
                    </ul>

                    <ul className={styles.menu_item}>
                        <li className={`${styles.menu_title} ${styles.flex}`}>
                            <span className={styles.title}>Editor</span>
                            <span className={styles.line}></span>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={`${styles.link} ${styles.flex}`}>
                                <i className="bx bxs-magic-wand"></i>
                                <span>Magic Build</span>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={`${styles.link} ${styles.flex}`}>
                                <i className="bx bx-folder"></i>
                                <span>New Projects</span>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={`${styles.link} ${styles.flex}`}>
                                <i className="bx bx-cloud-upload"></i>
                                <span>Upload New</span>
                            </a>
                        </li>
                    </ul>

                    <ul className={styles.menu_item}>
                        <li className={`${styles.menu_title} ${styles.flex}`}>
                            <span className={styles.title}>Setting</span>
                            <span className={styles.line}></span>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={`${styles.link} ${styles.flex}`}>
                                <i className="bx bx-flag"></i>
                                <span>Notice Board</span>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={`${styles.link} ${styles.flex}`}>
                                <i className="bx bx-award"></i>
                                <span>Award</span>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={`${styles.link} ${styles.flex}`}>
                                <i className="bx bx-cog"></i>
                                <span>Setting</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={`${styles.sidebar_profile} ${styles.flex}`}>
                    <span className={styles.nav_image}>
                        <Image
                            src="/Logo.png"
                            alt="logo_img"
                            width={40}
                            height={40}
                        />
                    </span>
                    <div className={styles.data_text}>
                        <span className={styles.name}>HHHHHHHH</span>
                        <span className={styles.email}>hhhhhh@gmail.com</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;