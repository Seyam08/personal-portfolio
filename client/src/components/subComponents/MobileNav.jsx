import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItem } from "../../constants/menuItem";
import { MenuIcon } from "../../icons/Icons";

export default function MobileNav({ customClass }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative z-50 mobile-menu ${customClass}`}>
      <MenuIcon
        onClick={() => setOpen((prevState) => !prevState)}
        className="cursor-pointer text-primary"
      />
      <div
        className={`right-0 bg-secondary border-thin mt-2 w-40 origin-top-right overflow-auto rounded-xl py-2 text-base shadow-md focus:outline-none  absolute animate-in ${
          open ? "grid" : "hidden"
        }`}
      >
        <div className="grid">
          {menuItem.map((item, key) => {
            const { href, label } = item;
            return (
              <NavLink
                className="rounded-md px-4 py-2 transition-colors font-normal  text-secondary hover:text-primary hover:bg-[#efefef] dark:hover:bg-black"
                to={href}
                key={key}
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
