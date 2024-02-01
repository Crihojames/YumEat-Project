import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Meal from "./components/Meal";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery/>
      <TopPicks />
      <Meal />
        <Categories />
        <NewsLetter/>
    </div>
  );
}

export default App;
