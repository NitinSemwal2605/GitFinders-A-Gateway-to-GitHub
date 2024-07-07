import { Link, Navigate } from 'react-router-dom';

import usePageTitle from '@/hooks/usePageTitle';
import useUserStore from '@/store';

const Error = () => {
  const errMsg = useUserStore((state) => state.errMsg);
  usePageTitle('Error has occured!');

  if (!errMsg) return <Navigate to={'/'} />;

  return (
    <section className='hero min-h-[70vh] size-full'>
      <div className='hero-content w-full text-center p-0 sm:wrapper-spacing'>
        <div className='max-w-lg space-y-7'>
          <div className='flex-center'>
            <img src={'/favicon.svg'} alt='GitFinders icon' />
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold dark:text-neutral-content'>
            Something went wrong!
          </h2>
          <div className='space-y-4 w-full'>
            <div role='alert' className='alert alert-error'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='stroke-current shrink-0 h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>{errMsg}</span>
            </div>
          </div>

          <Link to='/' className='inline-block'>
            <button className='btn dark:btn-neutral uppercase'>
              go to homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
