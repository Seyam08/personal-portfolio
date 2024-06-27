import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import PageNotFound from "../components/pages/PageNotFound";
import Projects from "../components/pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper components={Home} />,
  },
  {
    path: "/about",
    element: <Wrapper components={About} />,
  },
  {
    path: "/projects",
    element: <Wrapper components={Projects} />,
  },
  {
    path: "/contact",
    element: <Wrapper components={Contact} />,
  },
  {
    path: "*",
    element: <Wrapper components={PageNotFound} />,
  },
]);
