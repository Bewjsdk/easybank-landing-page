import { useEffect, useState } from "react";
import { logo, icons } from "../../assets/images";
import Button from "../Button/Button";
import NavLinks from "./NavLinks/NavLinks";

const Navbar = () => {
  // Icons
  const {hamburger, close} = icons;
  
  // Open menu state
  const [openMenu, setOpenMenu] = useState(false);

  // Handle open menu state
  const handleOpenMenu = () => {
    setOpenMenu(prev => !prev);
  }

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(":root");
    if(root !== null) {
      root.style.setProperty("--nav-open", `${openMenu? "block" : "none"}`);
    }
  }, [openMenu])

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav__logo">
        <a href="#home">
          <img src={logo} alt="Easybank Logo" />
        </a>
      </div>

      {/* Section Links (Desktop)*/}
      <ul className="nav__links">
        <NavLinks 
          type="navbar" 
        />
      </ul>

      {/* Section Links (Mobile) */}
      <div className="nav__linksMobile">
        <button onClick={handleOpenMenu}>
          {openMenu ? 
          <img src={close} alt="Close Button" />
          :
          <img src={hamburger} alt="Menu Button" />
          } 
        </button>
        
        {openMenu && 
        <ul>
          <NavLinks type="navbar" setOpenMenu={setOpenMenu}/>
        </ul>
        }  
      </div>

      {/* Request Invite Button */}
      <div className="nav__button">
        <Button>Request Invite</Button>
      </div>
    </nav>
  )
}

export default Navbar