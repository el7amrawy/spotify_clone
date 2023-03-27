import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Search from "./pages/Search";
import RootPage from "./pages/RootPage";
import SearchResults from "./pages/SearchResults";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="search/:string" element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
