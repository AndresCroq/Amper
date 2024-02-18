/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl';
  else return '/dashboards/bank';
};

export default getHomeRoute;
