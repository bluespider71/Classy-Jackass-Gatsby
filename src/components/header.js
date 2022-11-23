import React from "react";
import { Link } from "gatsby";

import Logo from "../images/logos/logo-light.svg";
import Button from "./button";

const Header = () => {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Feed", href: "#feed" },
  ];
  return (
    <header className="bg-black fixed z-[1000] w-full">
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex flex-row gap-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-sm font-medium text-white hover:text-primary-600 px-4"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button label="CONTACT US" link="#" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
