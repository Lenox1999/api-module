export default (ctx, inject) => {  

  ctx.$api = 'test'
  inject('api', 'test')
}
