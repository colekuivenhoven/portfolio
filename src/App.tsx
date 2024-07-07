import React, {useState, useEffect} from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Fade from '@mui/material/Fade';

// Import styles
import './App.scss';

// Import Components
import Loading from "./components/Loading/Loading";
import NavMenu from "./components/NavMenu/NavMenu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false);
    }, 500);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Fade in={!loading} timeout={500} style={{ transformOrigin: 'bottom' }}>
        <div className="content">
          <Home />
        </div>
      </Fade>,
    },
    {
      path: "/about",
      element: <Fade in={!loading} timeout={500} style={{ transformOrigin: 'bottom' }}>
        <div className="content">
          <About />
        </div>
      </Fade>,
    },
    {
      path: "/projects",
      element: <Fade in={!loading} timeout={500} style={{ transformOrigin: 'bottom' }}>
        <div className="content">
          <Projects />
        </div>
      </Fade>,
    },
    {
      path: "/work",
      element: <Fade in={!loading} timeout={500} style={{ transformOrigin: 'bottom' }}>
        <div className="content">
          <Work />
        </div>
      </Fade>,
    },
  ]);
  return (
    <>
      <div className="App">
        <NavMenu />
        {loading ? <Loading /> : null}
        <RouterProvider router={router} />
        <div className="copyright">
          <span>&copy; {new Date().getFullYear()} Cole Kuivenhoven</span>
        </div>
      </div>
    </>
  );
}

//export default App;
