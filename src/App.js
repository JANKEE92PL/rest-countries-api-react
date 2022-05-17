import Header from "./components/Header";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-gray-100 z-0">
      <Header></Header>
      <div className="wrapper">
        <nav className="flex justify-between items-center mb-16">
          <Search></Search>
          <Dropdown></Dropdown>
        </nav>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
