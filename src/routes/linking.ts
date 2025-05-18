import { RouteName } from './types';

export const linking = {
  prefixes: ['/'],
  config: {
    screens: {
      [RouteName.Login]: RouteName.Login,
      [RouteName.Dashboard]: RouteName.Dashboard,
    },
  },
};
