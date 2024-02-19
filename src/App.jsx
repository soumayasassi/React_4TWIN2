import { Route, Routes } from "react-router-dom";
import "./App.css";
 
import About from "./components/About";
import SearchParams from "./components/SearchParams";
import NotFound from "./components/NotFound";
 
import ParentOutlet from "./components/ParentOutlet";
import Child1Outlet from "./components/Child1Outlet";
import Child2Outlet from "./components/Child2Outlet";
import EventDetails from "./components/EventDetails";
import React, { Suspense } from "react";
const Events = React.lazy(()=> import('./components/Events')) 
const EventsDetails = React.lazy(()=> import('./components/EventDetails'))
function App() {
  return (
    <Suspense fallback={<p> chargement</p>}>
    <Routes>
      <Route path="/about/:username" element={<About />} />
      <Route path="home" element={<SearchParams />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/parent" element={<ParentOutlet />}>
        <Route path="child1" element={<Child1Outlet />} />
        <Route path="child2" element={<Child2Outlet />} />
      </Route>
      <Route path="events" element={<Events />} />
      <Route path="events/:id" element={<EventDetails/>} />
    </Routes>
    </Suspense>
  );
}

export default App;
