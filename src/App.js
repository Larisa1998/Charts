import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage';
import Countries from './Pages/Countries';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rest from './Pages/Rest';
import Fruits from './Pages/Fruits';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/countries',
      element: <Countries />
    },
    {
      path: '/rest',
      element: <Rest />
    },
    {
      path: '/fruits',
      element: <Fruits />
    }
  ])

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
