import "./App.css";
import AwardInfo from "./Components/AwardInfo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ToolsInfo from "./Components/ToolsInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <AwardInfo />
      <ToolsInfo />
      <Footer />
    </div>
  );
}

export default App;
