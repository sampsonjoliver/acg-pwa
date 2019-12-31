import { useRouteMatch } from 'react-router';

export const useNavigator = () => {
  const dashboardMatch = useRouteMatch({
    path: '/',
    exact: true,
  });
  const downloadsMatch = useRouteMatch({
    path: '/downloads',
  });
  const settingsMatch = useRouteMatch({
    path: '/settings',
  });

  const matchers = [dashboardMatch, downloadsMatch, settingsMatch];
  const matchedIndex = matchers.findIndex(it => !!it);
  const titles = ['Dashboard', 'Downloads', 'Settings'];

  return {
    index: matchedIndex,
    title: titles[matchedIndex],
    match: dashboardMatch || downloadsMatch || settingsMatch,
  };
};
