import { logoWhite } from "../assets/images"
import Button from "../components/Button/Button"
import NavLinks from "../components/Navbar/NavLinks/NavLinks"
import { socialIcons } from "../constant"

const Footer = () => {

  return (
    <footer id="contact" className="footer">
      {/* Logo & Social Links */}
      <div className="footer__start">
        {/* Logo */}
        <figure className="logo">
          <img src={logoWhite} alt="Logo" />
        </figure>

        {/* Social Links */}
        <ul className="social-links">
          {socialIcons.map(social => (
            <li key={social.title}>
              <a 
                href="#contact" 
                className="socialIcons"
                style={{
                  maskImage: `url(${social.icon})`, 
                  WebkitMaskImage: `url(${social.icon})`, 
                  WebkitMaskRepeat: `no-repeat`,
                }}
              >
                <img 
                  src={social.icon} 
                  alt="dasdasdd" 
                  width={25} height={25}
                  style={{
                    backgroundColor: "hsl(233, 26%, 24%)"
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section Links */}
      <div className="footer__center">
        <ul>
          <NavLinks type="footer"/>
        </ul>
      </div>

      {/* Footer Buuton & CopyRight */}
      <div className="footer__end">
        <Button>Request Invite</Button>
        <p>&copy; Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer