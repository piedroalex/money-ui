export const environment = {
  production: true,
  apiUrl: 'https://money-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('money-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
