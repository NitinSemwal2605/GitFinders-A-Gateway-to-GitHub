import { useState } from 'react';

// components & pages
import SearchBar from './SearchBar';
import ThemeController from './ThemeController';

// icons
import { FaXmark } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className='navbar wrapper'>
      <div className='flex-1'>
        <Link
          to='/'
          className='btn dark:btn-neutral btn-ghost text-xl lg:text-2xl'
        >
          GitFinders
        </Link>
      </div>
      <div className='flex-center space-x-3'>
        <div className='sm:flex hidden space-x-3'>
          {showSearch && <SearchBar />}
          <button
            className='btn btn-square dark:btn-neutral'
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <span className='text-xl'>
              {showSearch ? <FaXmark /> : <FiSearch />}
            </span>
          </button>
        </div>

        <ThemeController />
      </div>
    </header>
  );
};

export default Header;
