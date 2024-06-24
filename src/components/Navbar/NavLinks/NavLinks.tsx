import { Dispatch } from "react";
import { sectionLinks } from "../../../constant";

interface NavLinksProps {
  type: "navbar" | "footer";
  setOpenMenu?: Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ type, setOpenMenu }: NavLinksProps) => {

  const handleCloseMenu = () => {
    if(setOpenMenu) {
      setOpenMenu(false);
    }
  }

  return (
    <>
      {type === "navbar" ?
        <>
          {sectionLinks
            .map((link) => (
              <li key={link.title}>
                <a 
                  href={link.href}
                  onClick={handleCloseMenu}
                >
                  {link.title}
                </a>
              </li>))
            .slice(0, 5)
          }
        </>
        :
        <>
          {sectionLinks
            .map((link) => (
              <li key={link.title}>
                <a href={link.href}>{link.title} {link.title.includes("About") && "Us"}</a>
              </li>))
            .slice(1)
          }
        </>
      }
    </>
  );
};

export default NavLinks;
