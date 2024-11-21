import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import { Blogs } from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import SingleBlog from './pages/SingleBlog.jsx';

import blogsData from './data/blogsData.json'; // Import du fichier JSON local

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) => {
          const blog = blogsData.find((b) => b.id === parseInt(params.id, 10));
          if (!blog) {
            throw new Error('Blog not found');
          }
          return blog;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} basename="/BlogApp/" /> {/* Spécification du chemin de base */}
  </React.StrictMode>,
);
