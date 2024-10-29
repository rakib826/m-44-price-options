

import { HiMenuAlt1 } from "react-icons/hi";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from "../Link/Link";
import { useState } from "react";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:username", name: "Profile" },
  ];
  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
        {
          open === true? <RiCloseLargeLine /> : <HiMenuAlt1 />
        }
        
      </div>
      
      <ul className={`md:flex absolute md:static duration-1000 bg-slate-300 px-6 ${open? 'top-16':'-top-60'}`}>
        {
          routes.map(route => <Link key={route.id} route={route} ></Link>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
