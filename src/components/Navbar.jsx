import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="container mx-auto w-5/4 py-4 flex justify-between align-middle">
          <div className="logo">
            <h3>
              <a href="#" className="text-4xl font-bold">
                John Doe
              </a>
            </h3>
          </div>
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-xl border-b-2 border-slate-700" : "text-xl"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? "text-xl border-b-2 border-slate-700" : "text-xl"
              }
            >
              Service
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-xl border-b-2 border-slate-700" : "text-xl"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
