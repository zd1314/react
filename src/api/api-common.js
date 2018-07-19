import ApiBuilder from '../ApiBuilder';

const builder = new ApiBuilder({
  baseUrl: 'http://localhost:1234/apis',
  simulation: false
});

/**
 *
 * @type {string}
 */
builder.BASEURL_01 = window.BASEURL_01;

export default builder;
