import Expert from "./Sections/Expert";
import Header from "./Sections/Header";
import Revo from "./Sections/Revolution";
import CustomCursor from './components/CustomCursor/index';

function App() {
  return (
    <div className="h-full bg-dark-900">
    <CustomCursor/>
      <Header />
      <Revo />
      <Expert />
    </div>
  );
}

export default App;
