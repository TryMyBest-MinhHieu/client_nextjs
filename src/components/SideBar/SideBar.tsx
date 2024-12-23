import React from 'react';
import style from "./style.module.css";
import Image from 'next/image';
import clsx from 'clsx';
function SideBar() {
    return (
        <header className={style.sideBar}>
            <div className={style.image_text}>
                <span className={style.imagewrapper}>
                    <Image
                        className={clsx(style.imagepng)}
                        src={"/Logo.png"}
                        alt='Logo'
                        width={150}
                        height={150}
                    />
                </span>
            </div>
        </header>
    )
}

export default SideBar