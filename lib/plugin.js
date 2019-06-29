const { Client } = require('@groovy/api-wrapper')

export default (ctx, inject) => {
  const client = new Client({
    baseURL: process.env.GROOVY_API_BASE_URL
  });

  ctx.$api = client;
  inject('api', client);
}
