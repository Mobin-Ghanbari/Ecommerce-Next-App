import TopHeader from "../header/TopHeader";
import SearchHeader from "../header/SearchHeader";
import NavBar from "../header/NavBar";
const Header = () => {
  return (
    <header className="relative ">
      <TopHeader />
      <SearchHeader />
      <NavBar />
    </header>
  );
};

export default Header;
