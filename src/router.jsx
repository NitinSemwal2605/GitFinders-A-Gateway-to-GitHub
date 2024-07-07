import App from '@/App';
import Home from '@/pages/Home';
import User from '@/pages/User';
import Error from '@/pages/Error'; 

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='home' element={<Home />} />
        <Route path='user' element={<User />} /> 
        <Route path='error' element={<Error />} />
        <Route path='*' element={<Error />} />
      </Route>
    </>
  )
);

export default router;
