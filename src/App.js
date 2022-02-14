import Expert from "./Sections/Expert";
import Header from "./Sections/Header";
import Revo from "./Sections/Revolution";
import CustomCursor from "./components/CustomCursor/index";
import Agenda from "./Sections/Agenda";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="h-full bg-dark-900">
      <CustomCursor />
      <Header />
      <Revo />
      <Expert />
      <Agenda />
      <Footer />
    </div>
  );
}

export default App;
