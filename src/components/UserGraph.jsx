import useUserStore from '@/store';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const UserGraph = () => {
  const user = useUserStore((state) => state.user);

  const handleDotHover = (date, count) => {
    Tooltip.show(document.getElementById(date), {
      place: 'top',
      effect: 'solid',
      html: true,
      getContent: () => (
        <div>
          <p>Date: {date}</p>
          <p>Contributions: {count}</p>
        </div>
      ),
    });
  };

  const handleDotLeave = () => {
    Tooltip.hide();
  };

  return (
    <div className='w-full bg-white px-3 py-2 rounded-lg shadow-sm group hover:shadow-md dark:bg-dark-primary'>
      <div className='contributions-box mt-6 p-4 rounded-lg shadow-md bg-white dark:bg-dark-primary'>
        <h3 className='text-xl font-semibold mb-4'>Contributions</h3>
        {user.login ? (
          <div className='hidden sm:block'>
            <GitHubCalendar
              username={user.login}
              blockSize={15}
              fontSize={14}
              onMouseOver={(date, count) => handleDotHover(date, count)}
              onMouseOut={() => handleDotLeave()}
            />
            <Tooltip />
          </div>
        ) : (
          <p>Loading contributions...</p>
        )}
      </div>
    </div>
  );
};

export default UserGraph;
