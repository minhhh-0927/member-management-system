// Prefix the token with an underscore because Nest uses the token
// "UserRepository" for the TypeORM repository already. Need to find a better
// solution.
export const TEAM_REPOSITORY = '_TeamRepository';
export const TEAM_SERVICE = 'TeamService';
