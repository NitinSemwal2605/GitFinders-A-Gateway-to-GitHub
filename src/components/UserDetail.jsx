import useUserStore from '@/store';
import { BsBuildings } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdPin } from 'react-icons/io';
import { LuGlobe } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';

const UserDetail = () => {
  const user = useUserStore((state) => state.user);

  const formatDate = (date) => {
    return new Date(date).toLocaleString('default', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section className='wrapper size-full'>
      <div className='wrapper-spacing space-y-4 flex h-full flex-col justify-between'>
        <div className='space-y-6'>
          <div className='space-y-4'>
            <div className='flex justify-between md:items-center flex-col md:flex-row'>
              <h2 className='text-2xl font-semibold'>{user.name}</h2>
              <div>
                <p className='text-lg font-medium'>
                  Joined {formatDate(user.created_at)}
                </p>
                <p className='text-lg font-medium'>
                  Updated {formatDate(user.updated_at)}
                </p>
              </div>
            </div>
            {user?.bio ? (
              <p>{user.bio}</p>
            ) : (
              <p className='text-lg font-medium'>This profile has no bio.</p>
            )}
          </div>

          <div className='flex gap-3 flex-wrap'>
            {user.public_repos ? (
              <a
                className='user-stats hover:shadow-md hover:text-primary'
                target='_blank'
                href={`https://github.com/${user.login}?tab=repositories`}
              >
                <h4>{user.public_repos}</h4>
                <p>repositories</p>
              </a>
            ) : (
              ''
            )}
            {user.followers ? (
              <a
                className='user-stats hover:shadow-md hover:text-primary'
                target='_blank'
                href={`https://github.com/${user.login}?tab=followers`}
              >
                <h4>{user.followers}</h4>
                <p>followers</p>
              </a>
            ) : (
              ''
            )}
            {user.following ? (
              <a
                className='user-stats hover:shadow-md hover:text-primary'
                target='_blank'
                href={`https://github.com/${user.login}?tab=following`}
              >
                <h4>{user.following}</h4>
                <p>following</p>
              </a>
            ) : (
              ''
            )}
            {user.commits ? (
              <a
                className='user-stats hover:shadow-md hover:text-primary'
                target='_blank'
                href={`https://github.com/${user.login}?tab=commits`}
              >
                <h4>{user.commits}</h4>
                <p>commits</p>
              </a>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-3.5'>
          {user.blog ? (
            <div className='social-item'>
              <LuGlobe />
              <a href={user.blog} target='_blank'>
                {user.blog}
              </a>
            </div>
          ) : (
            ''
          )}

          {user.company ? (
            <div className='social-item'>
              <BsBuildings />
              <p>{user.company}</p>
            </div>
          ) : (
            ''
          )}

          {user.location ? (
            <div className='social-item'>
              <IoMdPin />
              <p>{user.location}</p>
            </div>
          ) : (
            ''
          )}

          {user.email ? (
            <div className='social-item'>
              <MdOutlineMailOutline />
              <a href={`mailto:${user.email}`} target='_blank'>
                {user.email}
              </a>
            </div>
          ) : (
            ''
          )}

          {user.twitter_username ? (
            <div className='social-item'>
              <FaXTwitter />
              <a
                href={`https://x.com/${user.twitter_username}`}
                target='_blank'
              >
                {user.twitter_username}
              </a>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
