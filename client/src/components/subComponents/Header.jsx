import logo from "../../assets/image/logo-black.png";
import { navlinks } from "../../constants/navLinks";

export default function Header() {
  return (
    <nav className="flex items-center justify-between gap-3 max-w-4xl w-full mx-auto px-4 py-3 md:px-6">
      <div>
        <div className="h-10 w-10">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <ul className="hidden items-center gap-1 md:flex">
        {navlinks.map((item, key) => {
          const { href, label } = item;
          return (
            <li
              key={key}
              className="text-neutral-500 px-2 py-2 hover:text-gray-900 transition-colors"
            >
              {label}
            </li>
          );
        })}
      </ul>

      <div>mode</div>
      <div className="md:hidden">hide</div>
    </nav>
  );
}
