import FeatureCard from "../components/Card/FeatureCard"
import { featureCards } from "../constant"


const About = () => {
  return (
    <section id="about" className="about">
      {/* Topic & Description */}
      <article className="about__content">
        <h2>Why choose EasyBank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial hub.
          Control you finacnes like never before.
        </p>
      </article>

      {/* About feature */}
      <article className="about__features">
        {/* Card feature wrapper */}
        <div className="cards-wrapper">
          {/* Card */}
          {featureCards.map(feature => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export default About