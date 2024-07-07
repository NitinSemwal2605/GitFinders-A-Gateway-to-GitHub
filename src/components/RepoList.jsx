import filterRepoList from '@/utils/filterRepoList';
import RepoDetail from './RepoDetail';
import useUserStore from '@/store';
import { useEffect, useState } from 'react';

const RepoList = () => {
  const repo = useUserStore((state) => state.repo);
  const filterBy = useUserStore((state) => state.filterBy);
  const setFilterBy = useUserStore((state) => state.setFilterBy);

  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    setRepoList(filterRepoList(repo, filterBy));
  }, [filterBy, repo]);

  return (
    <section className='wrapper size-full'>
      <div className='wrapper-spacing space-y-7'>
        <div className='flex-between space-x-3'>
          <h2 className='text-xl font-medium border-dashed border-b-2 border-gray-400'>
            Repositories
          </h2>

          <select
            className='select select-bordered w-full max-w-40 dark:bg-neutral dark:text-neutral-content dark:border-neutral-content'
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option disabled value={''}>
              Filter By
            </option>
            <option value='stars'>Stars</option>
            <option value='forks'>Forks</option>
            <option value='size'>Size</option>
          </select>
        </div>

        {repoList.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5'>
            {repoList.map((repo) => (
              <RepoDetail key={repo.id} repo={repo} />
            ))}
          </div>
        ) : (
          <p className='text-lg font-medium'>This profile has 0 repos.</p>
        )}
      </div>
    </section>
  );
};

export default RepoList;
