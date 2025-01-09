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
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
