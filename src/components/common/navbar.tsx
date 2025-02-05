import { Link, NavLink } from "react-router";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 gap-4 md:justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Pokemon Collection Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Pokemon Collection
          </span>
        </Link>
        <div>
          <ul className="font-medium flex flex-wrap justify-center gap-4">
            <li>
              <NavLink to="/">
                {({ isActive }) => (
                  <Button
                    className={isActive ? "border border-slate-900" : ""}
                    variant={isActive ? "default" : "outline"}
                  >
                    Browse
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-collection">
                {({ isActive }) => (
                  <Button
                    className={isActive ? "border border-slate-900" : ""}
                    variant={isActive ? "default" : "outline"}
                  >
                    My Collection
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/analytics">
                {({ isActive }) => (
                  <Button
                    className={isActive ? "border border-slate-900" : ""}
                    variant={isActive ? "default" : "outline"}
                  >
                    Analytics
                  </Button>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
