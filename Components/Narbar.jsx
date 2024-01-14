"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/Constants";
import logo from "../public/my_logo.png";
import personal from "../public/personal.svg";
import heart from "../public/heart.svg";
import shop from "../public/shopping.png";
import { usePathname } from "next/navigation";
import { MdMenuOpen } from "react-icons/md";
import Search from "../public/searc.png"
import Transition from "../Components/Transition";
import Button from "../Components/Button";
export default function Home() {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");
  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <main className="absolute z-20 w-[100%] h-[100px]  navbar-expand-lg d-flex align-items-center bg-gray-700 py-4 p-10">
      <div className="container flex justify-between items-center ">
        <div className="flex justify-content-left items-center ">
          <Image src={logo} alt="logo" width={70} />
          <span className="text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 hidden md:flex">
            Ngan kang
          </span>
        </div>
        <nav className="flex-col md:flex-row hidden md:flex navbar ">
          <ul className="gap-5 flex  text-white">
            {isRouting && <Transition />}
            {navigation.map((nav) => (
              <Link
                key={nav.name}
                href={nav.href}
                className="font-[20px] text-white  cursor-pointer"
              >
               {nav.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div>
          <div className="flex gap-5">
            <a href="/" className="text-white">
              <Image src={personal} alt="personal" width={20} />
            </a>
            <a href="/" className="text-white"></a>
              <Image src={Search} alt="research" width={20}/>
              <Button/>
            <a href="/" className="text-white">
              <Image src={heart} alt="personal" width={20} />
            </a>

            <a href="/" className="text-white">
              <Image src={shop} alt="personal" width={20} />
            </a>
          </div>
        </div>
        <span
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            className="navbar-toggler flex-col md:hidden "
          >
            <i className="bi bi-list mobile-nav-toggle  ">
              {" "}
              <MdMenuOpen className="size-8"/>
            </i>
        </span> 
      </div>
    </main>
  );
}
