import Navbar from "./Navbar";

function Header() {
  return (
    <header className="max-h-[100vh] w-full flex md:none flex-row items-center justify-between fixed top-0 bg-white z-[50]">
      <Navbar />
    </header>
  );
}

export default Header;
