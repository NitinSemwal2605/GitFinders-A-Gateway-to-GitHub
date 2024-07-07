import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { fetchUser, fetchRepos } from '@/api';

const initialState = {
  username: '',
  user: {},
  repo: [],
  errMsg: '',
  filterBy: '',
};

const userStore = (set) => ({
  ...initialState,

  setFilterBy: (filterBy) => set({ filterBy: filterBy }),
  setUsername: (username) => set(() => ({ username: username })),
  fetchUserData: async (username) => {
    try {
      const user = await fetchUser(username);
      const repo = await fetchRepos(username);
      return set(() => ({ user: user, repo: repo }));
    } catch (err) {
      return set({ errMsg: err.message });
    }
  },
  clearState: () => set({ ...initialState }),
});

const useUserStore = create(devtools(userStore), { name: 'userStore' });

export default useUserStore;
