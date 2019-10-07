const { Client } = require('@groovy/api-wrapper')

/**
 * @deprecated This is going to be fully reworked while https://app.clubhouse.io/groovy/epic/337/complete-webapp-rework
 */
export default (ctx, inject) => {
  const client = new Client({
    baseURL: ctx.app.$env.GROOVY_API_BASE_URL
  });

  ctx.$api = client;
  inject('api', client);
}
