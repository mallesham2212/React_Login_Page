
import './App.css';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import Body from './components/Body';
import Signin from './components/Signin';


function App() {

  const appRouter=createBrowserRouter([
    {
      path: '/',
      element: <><Loginpage/></>
    },
    // {
    //   path:"/login",
    //   element:<><Header/><Body/></>
    // },
    {
      path:"/sign",
      element:<><Signin/></>
    },
    {
      path:"/home",
      element:<> <Header/> <Body/> </>
    },
  ]
    
  )
  
  return (
    <>
    <RouterProvider router={appRouter} />
    
    </>
  );
}

export default App;
