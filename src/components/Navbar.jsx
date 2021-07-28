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
          <div className="hidden md:flex w-14">

            <svg width="51" height="82" viewBox="0 0 51 82" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.2231 45.704C46.2071 50.856 41.9831 53.464 35.5511 53.528C32.7671 53.528 30.3031 52.936 28.1591 51.752C26.0151 50.536 24.3511 48.872 23.1671 46.76C21.9831 44.648 21.3911 42.216 21.3911 39.464C21.3911 36.776 21.9671 34.376 23.1191 32.264C24.3031 30.152 25.9671 28.504 28.1111 27.32C30.2871 26.104 32.7831 25.496 35.5991 25.496C37.6151 25.496 39.4231 25.88 41.0231 26.648C42.6231 27.384 43.8711 28.408 44.7671 29.72V25.976H47.6471V34.136L45.0551 34.232C44.0631 32.184 42.8151 30.696 41.3111 29.768C39.8071 28.84 37.9671 28.376 35.7911 28.376C33.7111 28.376 31.8711 28.872 30.2711 29.864C28.7031 30.824 27.4871 32.136 26.6231 33.8C25.7591 35.464 25.3271 37.336 25.3271 39.416C25.3271 41.656 25.7751 43.624 26.6711 45.32C27.5671 47.016 28.8151 48.328 30.4151 49.256C32.0151 50.184 33.8071 50.648 35.7911 50.648C37.9671 50.648 39.9031 50.136 41.5991 49.112C43.3271 48.088 44.5751 46.472 45.3431 44.264L48.2231 45.704Z" fill="white" fill-opacity="0.75"/>
              <path d="M6.49056 22.28H1.37856V18.464H17.8666V22.28H12.5386L23.9866 52.592L35.2906 22.28H30.1066V18.464H45.5146V22.28H40.5466L26.1466 59H21.0346L6.49056 22.28Z" fill="white" fill-opacity="0.9"/>
            </svg>

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
          <div className="pl-5 md:hidden w-14">

            <svg width="51" height="82" viewBox="0 0 51 82" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.2231 45.704C46.2071 50.856 41.9831 53.464 35.5511 53.528C32.7671 53.528 30.3031 52.936 28.1591 51.752C26.0151 50.536 24.3511 48.872 23.1671 46.76C21.9831 44.648 21.3911 42.216 21.3911 39.464C21.3911 36.776 21.9671 34.376 23.1191 32.264C24.3031 30.152 25.9671 28.504 28.1111 27.32C30.2871 26.104 32.7831 25.496 35.5991 25.496C37.6151 25.496 39.4231 25.88 41.0231 26.648C42.6231 27.384 43.8711 28.408 44.7671 29.72V25.976H47.6471V34.136L45.0551 34.232C44.0631 32.184 42.8151 30.696 41.3111 29.768C39.8071 28.84 37.9671 28.376 35.7911 28.376C33.7111 28.376 31.8711 28.872 30.2711 29.864C28.7031 30.824 27.4871 32.136 26.6231 33.8C25.7591 35.464 25.3271 37.336 25.3271 39.416C25.3271 41.656 25.7751 43.624 26.6711 45.32C27.5671 47.016 28.8151 48.328 30.4151 49.256C32.0151 50.184 33.8071 50.648 35.7911 50.648C37.9671 50.648 39.9031 50.136 41.5991 49.112C43.3271 48.088 44.5751 46.472 45.3431 44.264L48.2231 45.704Z" fill="white" fill-opacity="0.75"/>
              <path d="M6.49056 22.28H1.37856V18.464H17.8666V22.28H12.5386L23.9866 52.592L35.2906 22.28H30.1066V18.464H45.5146V22.28H40.5466L26.1466 59H21.0346L6.49056 22.28Z" fill="white" fill-opacity="0.9"/>
            </svg>

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
