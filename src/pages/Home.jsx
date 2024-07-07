import { SearchBar } from '@/components';
import usePageTitle from '@/hooks/usePageTitle';
import useUserStore from '@/store';
import { useEffect } from 'react';

const Home = () => {
  const clearState = useUserStore((state) => state.clearState);

  usePageTitle('Home'); // Setting the page title

  useEffect(() => {
    clearState();
  }, []);

  return (
    <section className='hero min-h-[70vh] size-full'>
      <div className='hero-content text-center p-0 sm:wrapper-spacing'>
        <div className='max-w-md space-y-7'>
          <div className='flex justify-center'>
            <script
              src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"
            ></script>
            <dotlottie-player
              src="https://lottie.host/8ba01732-0812-48a4-aec9-554392d52317/t9JGNFbAD0.json"
              background="transparent"
              speed="1"
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <h1 className='text-xl sm:text-2xl font-semibold dark:text-neutral-content'>
            Search for GitHub Profile.
          </h1>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Home;
