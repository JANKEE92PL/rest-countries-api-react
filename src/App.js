import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="bg-gray-100 z-0">
      <Header></Header>
      <nav className="flex">
        <Search></Search>
      </nav>
    </div>
  );
}

export default App;
