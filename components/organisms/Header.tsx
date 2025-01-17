import Presentation from "../molecules/Presentation";
import Navbar from "../molecules/Navbar";
import Background from "../molecules/Background";

const Header = () => {
  return (
    <header className="flex flex-col h-full w-full xs:items-start mobile:items-center">
      <Navbar />
      <Presentation />
      <Background />
    </header>
  );
};

export default Header;
