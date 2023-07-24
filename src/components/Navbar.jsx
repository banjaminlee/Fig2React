import { useState } from "react";
import { bigLogo, close, hamburger, logo } from "../assets";

function Navbar() {
  const [activeNav, setActiveNav] = useState(false);
  const [navBg, setnavBg] = useState(false);


  const changeNav = () => {
    setActiveNav(!activeNav);
  };
  
  const changeColor = ()=> {
    if(window.scrollY>=100) {
      setnavBg(true)
    }else {
      setnavBg(false)
    }
  }
  
  window.addEventListener("scroll", changeColor)
 

  return (
    <nav className={` fixed w-full  px-7 flex justify-between items-center md:px-12 ${navBg?"py-7 bg-color-bg-black":"py-10 bg-transparent transition-all duration-500"}`}>
      <div className="logo">
        <img src={logo} alt="22N logo" className="lg:hidden" />
        <img src={bigLogo} alt="22N Logo" className="hidden lg:block" />
      </div>
      <div className="hamburger-menu lg:hidden" onClick={changeNav}>
        <img src={hamburger} alt="hamburger" onClick={changeNav}/>
      </div>

      <ul id="navlinks" className={`navlinks bg-color-glassy fixed top-5 px-10 py-20 flex flex-col justify-center items-left gap-10 rounded-md ${activeNav?"right-5":"-right-full"} transition-all duration-980 text-xl`}>
        <div
          className="close-btn absolute top-4 right-4 w-10 cursor-pointer"
          onClick={changeNav} 
        >
          <img src={close} alt="" className="w-full" onClick={changeNav} />
        </div>
        <li>
          <a href="#" className="nav-link">
            Hoe het werkt
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Word een partner
          </a>
        </li>
        <li>
          <a href="#" className="nav-link bg-btn-purple px-4 py-3 rounded-md">
            Inloggen

          </a>
        </li>
      </ul>

      <ul className="lg:flex hidden justify-around items-center gap-12 text-lg ">
        <li>
          <a href="#" className="nav-link">
            Hoe het werkt
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Word een partner
          </a>
        </li>
        <li>
          <a href="#" className="nav-link bg-btn-purple px-4 py-3 rounded-md">
            Inloggen

          </a>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
