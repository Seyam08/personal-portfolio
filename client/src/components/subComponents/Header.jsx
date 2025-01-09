import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoBlack from "../../assets/image/logo-black.png";
import logoWhite from "../../assets/image/logo-white.png";
import { menuItem } from "../../constants/menuItem";
import { MoonIcon, SunIcon } from "../../icons/Icons";
import MobileNav from "./MobileNav";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme
      ? storedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prev) => {
      return prev === "dark" ? "light" : "dark";
    });
  };

  return (
    <nav className="flex items-center justify-between gap-3 max-w-4xl 2xl:max-w-6xl w-full mx-auto px-4 py-3 md:px-6">
      <div>
        <div className="h-10 w-10 2xl:h-14 2xl:w-14">
          <Link to={"/"}>
            <img src={theme === "dark" ? logoWhite : logoBlack} alt="logo" />
          </Link>
        </div>
      </div>

      <ul className="hidden items-center gap-1 md:flex navMenu">
        {menuItem.map((item, key) => {
          const { href, label } = item;
          return (
            <li key={key}>
              <NavLink
                to={href}
                className="block px-3 py-2 text-secondary font-semibold hover:text-black dark:hover:text-white transition-colors rounded-xl text-base 2xl:text-lg"
              >
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="ml-auto md:ml-0">
        {/* icon={theme === "dark" ? faSun : faMoon}
        onClick={handleThemeSwitch}
        size="xl" className="cursor-pointer text-primary" */}
        {theme === "dark" ? (
          <SunIcon className={"icons"} onClick={handleThemeSwitch} />
        ) : (
          <MoonIcon className={"icons"} onClick={handleThemeSwitch} />
        )}
      </div>

      <MobileNav customClass={"md:hidden"} />
    </nav>
  );
}
