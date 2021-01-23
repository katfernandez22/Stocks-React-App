import "./App.css";
import Header from "./component/Header";
import Stocks from "./component/Stock";
import Search from "./component/Search";

function App() {
  return (
    <div className="body">
      <Header />
      <div className="space"></div>
      <Stocks />
      <Search />
    </div>
  );
}

export default App;