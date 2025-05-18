export enum RouteName {
  Login = 'login',
  Dashboard = 'dashboard',
}

export type LoginRouteParams = {
  to: string;
};

export type DashboardRouteParams = {
  userId: string;
};

export type RootStackParamList = {
  [RouteName.Login]: LoginRouteParams;
  [RouteName.Dashboard]: DashboardRouteParams;
};
