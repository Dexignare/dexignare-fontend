// import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

const Header = () => {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="h-full bg-dark-900">
      <div className="mx-auto lg:max-w-screen-md sm:w-full mx-auto">
        <div className="z-10 pb-8 ">
          {/* <Navbar/> */}
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Header;
