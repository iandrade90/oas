import { useState } from "react";
import "./headerStyles.css";

const HeaderContainer: React.FC = ({ children }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const size = window.scrollY;
    if (size > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={
        !scrolled ? "fixed-top header-transparent" : "fixed-top active"
      }
    >
      <div className="container d-flex align-items-center justify-content-between">
        {children}
      </div>
    </header>
  );
};

export default HeaderContainer;
