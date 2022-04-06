import "./heroStyles.css";

const HeroContainer: React.FC = ({ children }) => {
  return (
    <section id="hero">
      <div className="hero-container">{children}</div>
    </section>
  );
};

export default HeroContainer;
