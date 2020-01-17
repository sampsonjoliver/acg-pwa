import { useRouteMatch } from 'react-router';

type ScreenName = 'video' | 'dashboard' | 'downloads' | 'settings';

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

  const videoMatch = useRouteMatch({
    path: '/video',
  });

  const screens: ScreenName[] = ['dashboard', 'downloads', 'settings', 'video'];
  const matchers = [dashboardMatch, downloadsMatch, settingsMatch, videoMatch];
  const matchedIndex = matchers.findIndex(it => !!it);
  const titles = ['Dashboard', 'Downloads', 'Settings', 'Video'];

  return {
    screen: screens[matchedIndex],
    index: matchedIndex,
    title: titles[matchedIndex],
    match: dashboardMatch || downloadsMatch || settingsMatch || videoMatch,
  };
};
