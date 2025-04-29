import { Link } from "react-router-dom";
import { contactList } from "../../constants/contactList";
import { ArrowUpRightIcon } from "../../icons/Icons";

export default function ContactInfo({ customClass }) {
  return (
    <ul
      className={`grid flex-grow grid-cols-1 gap-3 md:grid-cols-2 ${customClass}`}
    >
      {contactList.map((item, key) => {
        const { label, icon: Icon, link } = item;
        return (
          <li
            className="col-span-1 border border-transparent hover:border-thin rounded-lg"
            key={key}
          >
            <Link
              target={"_blank"}
              to={link}
              className="group bg-tertiary inline-grid w-full p-4 rounded-lg  transition hover:bg-primary text-primary"
            >
              <div className="flex items-center gap-3">
                <Icon className={"text-primary h-5 w-5"} />
                {label}
                <ArrowUpRightIcon
                  className={
                    "text-primary h-5 w-5 ml-auto group-hover:rotate-45 transition-transform duration-200"
                  }
                />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
