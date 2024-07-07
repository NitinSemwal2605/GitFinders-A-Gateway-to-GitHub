import langColors from '@/utils/langColors';

// icons
import { FaGithub, FaStar } from 'react-icons/fa';
import { FaCodeFork } from 'react-icons/fa6';
import { LuGlobe } from 'react-icons/lu';
import { RiGitRepositoryLine } from 'react-icons/ri';

const RepoDetail = ({ repo }) => {
  return (
    <div className='w-full bg-white px-3 py-2 rounded-lg shadow-sm group hover:shadow-md dark:bg-dark-primary'>
      <div className='space-y-4 flex h-full flex-col justify-between'>
        <a className='space-y-2' href={repo.html_url} target='_blank'>
          <h3 className='flex items-center space-x-2 text-xl'>
            <span>
              <RiGitRepositoryLine />
            </span>
            <span className='group-hover:text-primary'>
              {repo.name.slice(0, 18)}
              <span className='text-sm'>{repo.name.length > 18 && '...'}</span>
            </span>
          </h3>
          {repo.description && <p className='text-sm'>{repo.description}</p>}
        </a>

        <div className='space-y-2'>
          <div className='flex flex-between'>
            <div className='flex-center space-x-1.5'>
              <div
                className='size-3 rounded-full'
                style={{ backgroundColor: langColors[repo.language] }}
              ></div>
              <div>{repo.language}</div>
            </div>

            <div className='flex-center space-x-2.5'>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target='_blank'
                  className='text-xl hover:text-primary'
                >
                  <LuGlobe />
                </a>
              )}
              <a
                href={repo.html_url}
                target='_blank'
                className='text-xl hover:text-primary'
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className='flex-between'>
            <div className='flex-center space-x-3'>
              <div className='flex-center space-x-1 text-gray-500 dark:text-gray-200'>
                <FaCodeFork />
                <span>{repo.forks}</span>
              </div>

              <div className='flex-center space-x-1 text-gray-500 dark:text-gray-200'>
                <FaStar />
                <span>{repo.stargazers_count}</span>
              </div>
            </div>

            <p className='font-medium text-gray-500 dark:text-gray-200'>
            {repo.size > 999 ? `${Math.round(repo.size / 1000)} MB` : `${repo.size} KB`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoDetail;
