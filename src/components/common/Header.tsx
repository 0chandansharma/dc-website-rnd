// src/components/common/Header.tsx
"use client";
import React from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-20 w-100 start-0 right-0 top-0">
      <div className="container max-w-[90rem] mx-auto">
        <Navbar
          className="bg-transparent py-0 md:py-[15px] xl:py-[30px]"
          rounded
        >
          <Navbar.Brand as={Link} href="#">
            <img
              src="/image/white-logo.png"
              className="mr-3 h-[75px] md:h-[103px]"
              alt="Flowbite React Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <ul className="flex mobile-ul flex-col p-4 xl:p-0 text-[16px] xl:text-[18px] w-full mt-0 border-t border-[#ffffffb3] bg-white xl:bg-black xl:bg-transparent items-end space-y-[32px] xl:space-y-0 xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0 ">
              <li className="block toogle0btns xl:hidden">
                <Navbar.Toggle />
              </li>
              
              <li>
                <Link
                  href="#"
                  className="text-[#000] xl:text-white hover:text-[#FE6623] font-normal tracking-[-0.54px]"
                  aria-current="page"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#000] xl:text-white hover:text-[#FE6623] font-normal tracking-[-0.54px]"
                  aria-current="page"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#000] xl:text-white hover:text-[#FE6623] font-normal tracking-[-0.54px]"
                  aria-current="page"
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#000] xl:text-white hover:text-[#FE6623] font-normal tracking-[-0.54px]"
                  aria-current="page"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#000] xl:text-white hover:text-[#FE6623] font-normal tracking-[-0.54px]"
                  aria-current="page"
                >
                  Company
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-white xl:hidden inline-block me-[10px] font-normal text-[16px] bg-[#FE6623E3] xl:text-[22px] border py-[8px] px-[36px] rounded-[24px] hover:bg-[#fe6623] border-[#fe6623]"
                >
                  {" "}
                  Book a Demo
                </Link>
                <Link
                  href="#"
                  className="text-[#707070] xl:text-white font-normal text-[16px] xl:text-[22px] border py-[8px] px-[36px] rounded-[24px] hover:bg-[#fe6623] border-[#fe6623]"
                >
                  {" "}
                  Login
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;