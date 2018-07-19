import builder from './api-common';

/* test */
export const test = builder.build({
  baseUrl: builder.BASEURL_01,
  url: 'xxx',
  method: 'GET',
  simulation: true,
  simulator: './static/api-simulation/test/test.json'
});


/**柱图 */
export const pictorialBar = builder.build({
  baseUrl: builder.BASEURL_01,
  url: 'xxx',
  method: 'GET',
  simulation: true,
  simulator: './static/api-simulation/home/pictorialBar.json'
});
/**柱图 */
export const one = builder.build({
  baseUrl: builder.BASEURL_01,
  url: 'xxx',
  method: 'GET',
  simulation: true,
  simulator: './static/api-simulation/home/one.json'
});