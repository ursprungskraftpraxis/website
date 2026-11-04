import { useLocation } from "react-router";
import { aboutContent } from "@/data/about";
import "@/sections/styles/about.css";

function About() {
  const location = useLocation();
  const language = location.pathname.startsWith("/de") ? "de" : "en";
  const content = aboutContent[language];

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <img
            className="about__image"
            src="/images/about-placeholder.webp"
            alt={content.imageAlt}
          />
        </div>

        <div className="about__content">
          <h2 className="about__title">{content.title}</h2>
          <h3 className="about__name">{content.name}</h3>

          {content.paragraphs.map((paragraph, index) => (
            <p className="about__paragraph" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
