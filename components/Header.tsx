"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-[#0A1337]"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="cursor-pointer" onClick={scrollToTop}>
          <div className="cursor-pointer" onClick={scrollToTop}>
            <div className="hidden md:block">
              <Image
                src={
                  scrolled
                    ? "/logos/infoCreon-color.png"
                    : "/logos/infoCreon-white.png"
                }
                alt="InfoCreon logo desktop"
                width={160}
                height={50}
                priority
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={
                  scrolled
                    ? "/logos/infoCreon-black.png"
                    : "/logos/infoCreon-white.png"
                }
                alt="InfoCreon logo mobile"
                width={120}
                height={40}
                priority
              />
            </div>
          </div>
        </div>
        <nav className="hidden md:flex space-x-12  text-base tracking-wide font-normal">
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-[#0A1337] cursor-pointer"
          >
            What we do
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#0A1337] cursor-pointer"
          >
            Who we are
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#0A1337] cursor-pointer"
          >
            Contact us
          </button>
        </nav>

        <div className="md:hidden">
          {menuOpen ? (
            <X
              size={28}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-white text-black z-50 px-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <div
              onClick={scrollToTop}
              className="text-2xl font-bold cursor-pointer"
            >
              <Image
                src="/logos/infoCreon-black.png"
                alt="InfoCreon logo mobile"
                width={120}
                height={40}
                priority
              />
            </div>
            <X
              size={28}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          </div>

          <nav className="space-y-6 text-base font-light tracking-wide ">
            <button
              onClick={() => scrollToSection("services")}
              className="w-full text-left"
            >
              What we do
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="w-full text-left"
            >
              Who we are
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full text-left"
            >
              Contact us
            </button>
          </nav>

          <div className="mt-10">
            <button className="w-full bg-black text-white py-3 font-semibold rounded">
              Let’s Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
