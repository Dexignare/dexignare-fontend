import CustomCursor from "./components/CustomCursor/index";
import Header from "./Sections/Header";
import Revo from "./Sections/Revolution";
// import Expert from "./Sections/Expert";
import Agenda from "./Sections/Agenda";
import GetInTouch from './Sections/GetInTouch';
import Footer from "./Sections/Footer";
import Sponsors from './Sections/Sponsors/index';
// import FAQ from './Sections/FAQ/index';
import BackToTop from './components/BackToTop/index';


function App() {
  return (
    <div className="h-full bg-dark-900">
      <CustomCursor />
      <BackToTop/>
      <Header />
      <Revo />
      {/* <Expert /> */}
      <Agenda />
      <Sponsors/>
      {/* <FAQ/> */}
      <GetInTouch/>
      <Footer />
    </div>
  );
}

export default App;
