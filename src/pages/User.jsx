import { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import {
  Footer,
  RepoList,
  SearchBar,
  Skeleton,
  UserAvatar,
  UserDetail,
} from '@/components';
import UserGraph from '@/components/UserGraph';
import usePageTitle from '@/hooks/usePageTitle';
import useUserStore from '@/store';

const User = () => {
  const [searchParams] = useSearchParams();
  const user_id = searchParams.get('id');

  const user = useUserStore((state) => state.user);
  const errMsg = useUserStore((state) => state.errMsg);
  const fetchUserData = useUserStore((state) => state.fetchUserData);

  usePageTitle(user_id);

  useEffect(() => {
    fetchUserData(user_id);
  }, [fetchUserData, user_id]);

  if (errMsg) return <Navigate to={'/error'} />;
  if (!user_id) return <Navigate to={'/'} />;
  if (Object.keys(user).length === 0) return <Skeleton />;

  return (
    <>
      <section>
        <div className='space-y-4'>
          <div className='sm:hidden block'>
            <SearchBar />
          </div>

          <section className='grid gap-5 sm:gap-7'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7'>
              <UserAvatar />
              <div className='lg:col-span-2'>
                <UserDetail />
              </div>
            </div>
            <UserGraph />
            <RepoList />
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default User;
