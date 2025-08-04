import { useEffect } from "react";
import Logo from "../Assets/bińko-logo-biale.png";

const DesktopNav = () => {
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        nav.classList.remove("bg-transparent");
        nav.classList.add(
          "bg-white/10",
          "backdrop-blur-md",
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

      if (lastScrollY < currentScrollY) {
        nav.classList.add("-translate-y-[100%]");
      } else {
        nav.classList.remove("-translate-y-[100%]");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="desktop-navbar navbar hidden xl:flex fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-500 ease-in-out">
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto px-8 h-[72px]">
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Bialgruz Logo"
            className="max-w-[260px] xl:ml-[28px]"
          />
        </div>

        {/* NAVIGATION */}
        <ul className="flex items-center text-white font-semibold text-sm xl:text-base 2xl:text-lg uppercase">
          <li className="px-4">
            <a href="#main" className="transition hover:opacity-80">O nas</a>
          </li>
          <li className="px-4 border-l-2 border-white/60">
            <a href="#offer" className="transition hover:opacity-80">Usługi</a>
          </li>
          <li className="px-4 border-l-2 border-white/60">
            <a href="#contact" className="transition hover:opacity-80">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
