const filterRepoList = (repo, filterBy) => {
  if (!filterBy) return repo.slice(0, 9);

  switch (filterBy.toLowerCase()) {
    case 'stars':
      return repo
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 9);
    case 'forks':
      return repo.sort((a, b) => b.forks_count - a.forks_count).slice(0, 9);
    case 'size':
      return repo.sort((a, b) => b.size - a.size).slice(0, 9);
    default:
      return repo.slice(0, 9);
  }
};

export default filterRepoList;
