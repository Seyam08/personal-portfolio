import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import logoBlack from "../../assets/image/logo-black.png";
import logoWhite from "../../assets/image/logo-white.png";
import { navlinks } from "../../constants/navLinks";
import MobileNav from "./MobileNav";

export default function Header() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex items-center justify-between gap-3 max-w-4xl w-full mx-auto px-4 py-3 md:px-6">
      <div>
        <div className="h-10 w-10">
          <img src={theme === "dark" ? logoWhite : logoBlack} alt="logo" />
        </div>
      </div>

      <ul className="hidden items-center gap-1 md:flex">
        {navlinks.map((item, key) => {
          const { label } = item;
          return (
            <li
              key={key}
              className="text-secondary px-3 py-2 hover:text-black dark:hover:text-white transition-colors"
            >
              {label}
            </li>
          );
        })}
      </ul>

      <div className="ml-auto md:ml-0">
        <FontAwesomeIcon
          icon={theme === "dark" ? faSun : faMoon}
          onClick={handleThemeSwitch}
          size="xl"
          className="cursor-pointer text-primary"
        />
      </div>

      <MobileNav customClass={"md:hidden"} />
    </nav>
  );
}
