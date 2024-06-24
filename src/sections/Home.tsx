import { useEffect, useState } from "react"
import { bgIntroDesktop, bgIntroMobile, mockupsImg } from "../assets/images"
import Button from "../components/Button/Button"

const Home = () => {
  // On mobile state
  const [onMobile ,setOnMobile] = useState(window.innerWidth);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setOnMobile(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Background intro for desktop
  const styles = {
    background: `url(${onMobile <= 768 ? bgIntroMobile : bgIntroDesktop})`
  }

  return (
    <section id="home" className="home">
      {/* Contents */}
      <article className="home__content">
        {/* Topic */}
        <h1>
          Next generation
          digital banking
        </h1>

        {/* Description */}
        <p>
          Take your financial life online. Your Easybank account
          will be a one-stop-shop for spending, saving, 
          budgeting, investing, and much more.
        </p>

        {/* Invite Button */}
        <Button>Request Invite</Button>
      </article>

      {/* Image */}
      <div className="home__image">
        <figure style={styles} className="home__image-wrapper">
          <img src={mockupsImg} alt="Mobile mockup image" />
        </figure>
      </div>
    </section>
  )
}

export default Home