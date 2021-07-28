import React, { useState } from 'react'
import styles from "../../public/style/navbar.module.css";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(isOpen => !isOpen);
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Listen", href: "/listen" },
    { name: "Blog", href: "#" },
    { name: "Premium", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav>
      <div className="xl:max-w-6xl mx-auto py-7 px-6">
        <div className="flex justify-between">
          {/* Desktop */}
          <div className="hidden md:flex">
            <img src="../assets/logo.svg" className="w-14" />
          </div>
          <div className="hidden md:flex items-center text-white font-main text-2xl justify-between space-x-10">
            {navigation.map((navitem) => (
              <div>
                <a className={styles.navitemHover} href={navitem.href}>
                  {navitem.name}
                </a>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button className="bg-white px-5 py-1.5">
              <span className="text-transparent font-bold text-2xl font-main bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Log In
              </span>
            </button>
          </div>
        </div>

        {/* Tablet/Mobile */}
        <div className="flex justify-between">
          <div className="pl-5">
            <img src="../assets/logo.svg" className="md:hidden w-14" />
          </div>
          <div className="flex items-center md:hidden">
            <button className="text-white pr-5" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden ${
          isOpen ? "flex" : "hidden"
        } text-white justify-between px-10 font-main mb-16`}
      >
        {navigation.map((navitem) => (
          <div>
            <a className="hover:underline" href={navitem.href}>
              {navitem.name}
            </a>
          </div>
        ))}
      </div>
      
    </nav>
  );
}
