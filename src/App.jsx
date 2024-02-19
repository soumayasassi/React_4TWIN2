 
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Events from './components/Events';
import About from "./components/About";
import SearchParams from "./components/SearchParams";
import NotFound from "./components/NotFound";
import Parent from "./components/Parent";
import ParentOutlet from "./components/ParentOutlet";
import Child1Outlet from "./components/Child1Outlet";
import Child2Outlet from "./components/Child2Outlet";
function App() {
 
  return (
    <Routes>
<Route path="/about/:username" element={<About/>}/>
<Route path="home" element={<SearchParams/>}/>
<Route path="*" element={<NotFound/>}/>
<Route path="/parent" element={<ParentOutlet/>}>
          <Route path="child1" element={<Child1Outlet/>} />
          <Route path="child2" element={<Child2Outlet />} />
        </Route>
    </Routes>
  );
}
 

export default App;
