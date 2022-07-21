import React from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home';
import NotFoundPages from "./pages/NotFoundPages";

import "./scss/app.scss"

export const SearchContext = React.createContext('');


const App = () => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="App">
      <SearchContext.Provider value = {{searchValue, setSearchValue}}>
        <div className="wrapper">
          <Header/>
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFoundPages/>}/>
              </Routes>
            </div>
          </div>
        </div>    
      </SearchContext.Provider>
    </div>
  );
}

export default App;
