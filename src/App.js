import "./App.css";
import FouterPart from "./component/FouterPart/FouterPart";
import PartFive from "./component/PartFive/PartFive";
import PartFour from "./component/PartFour/PartFour";
import PartNavbar from "./component/PartNavbar/PartNavbar";
import PartOne from "./component/PartOne/PartOne";
import PartSeven from "./component/PartSeven/PartSeven";
import PartThree from "./component/PartThree/PartThree";
import PartToo from "./component/PartToo/PartToo";
import SixPart from "./component/SixPart/SixPart";

function App() {
  return (
    <div className="App">
      <PartNavbar />
      <PartOne />
      <PartToo />
      <PartThree />
      <PartFour />
      <PartFive />
      <SixPart />
      <PartSeven />
      <FouterPart />
    </div>
  );
}

export default App;
