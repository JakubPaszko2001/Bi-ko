import React, { useState, useRef, useEffect } from "react";
import NavUl from "./NavUl";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import gsap from "gsap";
import Logo from "../Assets/bińko-logo-biale.png"; // Zmień ścieżkę jeśli trzeba

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const asideRef = useRef();
  const navRef = useRef();

  const handleMenuOpen = () => {
    setMenuOpen(true);
    gsap.to(asideRef.current, { y: "0%", duration: 0.8, ease: "power1.inOut" });
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    gsap.to(asideRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power1.inOut",
    });
  };

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    nav.classList.add("transition-all", "duration-500", "ease-in-out");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        nav.classList.remove("bg-transparent");
        nav.classList.add(
          "bg-white/10",              // lekko mleczna
          "backdrop-blur-md",         // efekt glass
          "shadow-md",
          "border-white/10"
        );
      } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove(
          "bg-white/10",
          "backdrop-blur-md",
          "shadow-md",
          "border-white/10"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="xl:hidden">
      <div
        ref={navRef}
        className="fixed top-0 left-0 w-screen h-20 z-40 bg-transparent rounded-b-3xl overflow-hidden transition-all duration-500 ease-in-out"
      >
        {/* LOGO */}
        <img
          className="w-1/3 max-w-[240px] absolute left-[20px] top-1/2 transform -translate-y-1/2"
          loading="eager"
          src={Logo}
          alt="Bińko-Bud Logo"
        />

        {/* BURGER */}
        <button
          aria-label="Open Menu"
          onClick={handleMenuOpen}
          className="fixed top-7 right-5"
        >
          <IoMdMenu className="w-[28px] h-[28px] text-white" />
        </button>
      </div>

      {/* MENU */}
      <aside
        ref={asideRef}
        className="fixed top-0 right-0 w-full h-full bg-[#1f3622] -translate-y-[100%] z-50"
      >
        <button
          aria-label="Close Menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={handleMenuClose}
          className="absolute top-10 right-10"
        >
          <IoMdClose className="w-[50px] h-[50px] text-white" />
        </button>
        <NavUl menuOpen={menuOpen} handleClose={handleMenuClose} />
      </aside>
    </nav>
  );
};

export default MobileNav;
