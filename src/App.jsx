import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header } from './components';
const App = () => {
  const location = useLocation();
  if (location.pathname === '/') return <Navigate to='/home' />;

  return (
    <main className='max-w-screen-lg mx-auto size-full min-h-screen'>
      <div className='p-4 sm:px-7 sm:py-10 size-full flex flex-col space-y-4 sm:space-y-8'>
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default App;
