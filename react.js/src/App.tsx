import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
// import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Admin from "./pages/Admin";
import Members from "./pages/Members";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/ContextAPI/Layout/layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <Admin />,
          },
          {
            path: "members",
            element: <Members />,
          },
          {
            path: "users",
            element: <Users />,
          },
        ],
      },
    ],
  },
]);

function App() {
  // const [count, setCount] = useState(0)
  const queryClient: any = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    // <>
    // <BrowserRouter>
    // <Navbar />
    // <hr />

    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/about' element={<About />} />
    //   <Route path='/contact' element={<Contact />} />
    //   <Route path='/dashboard' element={<Dashboard />}>
    //    <Route path='/dashboard/admin' element={<Admin />} />
    //    <Route path='/dashboard/members' element={<Members />} />
    //    <Route path='/dashboard/users' element={<Users />} />
    //   </Route>
    // </Routes>

    // </BrowserRouter>
    // </>
  );
}

export default App;
