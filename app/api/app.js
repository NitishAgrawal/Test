/**
 * Method Naming Convention for methods that map the REST API endpoint.
 *
 * - method name constructed by joining the paths of the API and consider the plural and singular income / outcome form of that related endpoint, e.g. /api/posts/<postId>/comments` will be `postComments` (instead of `postsComments`) since this endpoint is to retrieve specific (single) post's comments.
 * - no need to prepend any prefixes for `get` request
 * - for `post` request, method name should be prefixed by `create`
 * - for `patch` or `put` request, method name should be prefixed by `update`
 * - for `delete` request, method name should be prefixed by `delete`
 * - and for method that behaves dynamically (for example, toggling state), prepend it with `change`
 */

/**
 * Method `get` params will be added in url.
 */

/**
 * Method utils.toSanitizedSnakeCaseKey convert snack case to camel cases.
 */

import * as utils from './utils';

const api = utils.createAxiosInstance('http://ubux.biz'); // APP_BASE_URL
// TODO if we need token
// api.interceptors.request.use(utils.globalUserTokenInterceptor);

export const getAllStores = () => {
  return api.get('/test/get-all-stores');
};

export const searchStore = (params) => {
  return api.post('/test/search-store', utils.toSanitizedSnakeCaseKey(params));
};
