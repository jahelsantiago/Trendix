import './App.css';
import Header from "./Components/Header";
import NewsFeed from "./Components/NewsFeed";
import Stats from "./Components/Stats" 
function App() {
  return (
    <div className="App">
      {/*Header*/}
      <div className="app__header">
        <Header/>
      </div>
      {/*Body*/}
      <div className="app__body">
        <div className="app__container">
          {/*News*/}
          <NewsFeed/>
          {/*stats*/}
          <Stats/>
        </div>        
        

      </div>
    </div>
  );
}

export default App;
