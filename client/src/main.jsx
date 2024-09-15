import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignUp from "./pages/SignUp.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx";
import Categories from "./pages/Categories.jsx";
import Service from "./pages/Service.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import TestPage from "./pages/TestPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign",
    element: <SignUp />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/Categories",
    element: <Categories/>
  },
  {
    path: "/service",
    element: <Service />
  },
  {
    path: "/SearchResults",
    element: <SearchResults />
  }, {
    path: "/TestPage",
    element: <TestPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
