import { HeaderContainer } from "./Components/Header";
import { HeaderOptions, HeaderText, Logo } from "./Components/atoms";
import { HeroContainer } from "./Components/Hero";
import headerOptions from "./utils/headerOptions";

const App = () => {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <HeaderOptions options={headerOptions} />
      </HeaderContainer>
      <HeroContainer>
        <HeaderText />
      </HeroContainer>
    </>
  );
};

export default App;
