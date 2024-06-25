import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { navlinks } from "../../constants/navLinks";

export default function MobileNav({ customClass }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${customClass}`}>
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        onClick={() => setOpen((prevState) => !prevState)}
        className="cursor-pointer text-primary"
      />
      <div
        className={`right-0 bg-secondary border-thin mt-2 w-40 origin-top-right overflow-auto rounded-xl py-2 text-base shadow-md focus:outline-none  absolute animate-in ${
          open ? "grid" : "hidden"
        }`}
      >
        <div className="grid">
          {navlinks.map((item, key) => {
            const { href, label } = item;
            return (
              <a
                className="rounded-md px-4 py-2 transition-colors hover:text-primary hover:bg-gray-200 dark:hover:bg-black font-normal text-secondary"
                href={href}
                key={key}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
