import builder from './api-common';

/* test */
export const test = builder.build({
  baseUrl: builder.BASEURL_01,
  url: 'xxx',
  method: 'GET',
  simulation: true,
  simulator: './static/api-simulation/test/test.json'
});
// export const territory = builder.build({
//   baseUrl: builder.BASEURL_01,
//   url: 'xxx',
//   method: 'GET',
//   simulation: true,
//   simulator: './static/api-simulation/home/territory.json'
// });
