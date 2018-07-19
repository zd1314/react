import builder from './api-common';

/* test */
export const test = builder.build({
  baseUrl: builder.BASEURL_01,
  url: 'xxx',
  method: 'GET',
  simulation: true,
  simulator: './static/api-simulation/test/test.json'
});
/*红榜区域排行榜*/
export const home = builder.build({
  baseUrl: builder.BASEURL_01,
  url: 'xxx',
  method: 'GET',
  simulation: true,
  simulator: './static/api-simulation/home/data.json'
});
/*信用度*/
export const creditRing = builder.build({
  baseUrl: builder.BASEURL_01,
  url: 'xxx',
  method: 'GET',
  simulation: true,
  simulator: './static/api-simulation/home/creditRing.json'
});