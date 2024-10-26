import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import 'remixicon/fonts/remixicon.css'
import Home from '../pages/home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home />
        }
      ]
      
    },
  ]);

  export default router;