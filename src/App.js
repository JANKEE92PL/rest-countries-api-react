import Header from "./components/Header";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="bg-gray-100 z-0">
      <Header></Header>
      <nav className="wrapper flex justify-between items-center">
        <Search></Search>
        <Dropdown></Dropdown>
      </nav>
    </div>
  );
}

export default App;
