import React from "react";
import GradientText from "./ui/GradientText";

const Navbar = () => {
  return (
    <nav className="px-3 flex h-10 items-center  justify-between">
      {/* <div className="text-xl logo font-bold text-white">
        <span className="text-violet-500">&lt;</span>Pass-
        <span className="text-violet-500">Man/&gt;</span>
      </div> */}
      <div>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-xl logo font-medium "
        >
          <span>&lt;Pass-Man/&gt;</span>
        </GradientText>
      </div>
      <ul className="flex gap-4 text-white">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/">
          <li>About</li>
        </a>
        <a href="/">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
