export const environment = {
  production: true,
  apiUrl: 'https://money-api.herokuapp.com',

  tokenWhitelistedDomains: [ /money-api.herokuapp.com/ ],
  tokenBlacklistedRoutes: [/\/oauth\/token/]
};
