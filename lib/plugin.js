const { Client } = require('@groovy/api-wrapper')

export default (ctx, inject) => {
  const client = new Client(<%= JSON.stringify(options) %>);

  ctx.$api = client;
  inject('api', client);
}
