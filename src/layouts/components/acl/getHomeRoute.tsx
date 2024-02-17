/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl';
  else return '/dashboards/shipments';
};

export default getHomeRoute;