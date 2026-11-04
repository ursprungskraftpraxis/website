import { useLocation } from "react-router";
import { servicesContent } from "@/data/services";
import "@/sections/styles/services.css";

function Services() {
  const location = useLocation();
  const language = location.pathname.startsWith("/de") ? "de" : "en";
  const content = servicesContent[language];

  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2 className="services__title">{content.mainTitle}</h2>

        <div className="services__grid">
          {content.services.map((service) => (
            <article className="service-card" key={service.id}>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
