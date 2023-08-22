import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// const Layout = () => {
//   return (
//     <div className="app">
//       <QueryClientProvider client={queryClient}>
//         <Navbar />
//         <Outlet />
//         <Footer />
//       </QueryClientProvider>
//     </div>
//   );
// };

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/hotels",
      element: <List />,
    },
    {
      path: "/hotel/:id",
      element: <Hotel />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
