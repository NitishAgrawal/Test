import axios from 'axios';
import _ from 'lodash';
import { version } from '../../package.json';
import { showPopupAlert } from '../utils/showAlert';

export const createAxiosInstance = (baseURL) => {
  const api = axios.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'User-Agent': `ENGAGE/${version}`,
    },
    // Only consider error for HTTP 500 and above
    validateStatus: status => status >= 200 && status < 500,
  });

  if ('true') {
    api.interceptors.request.use(
      (config) => { console.log(config); return config; },
      (error) => { console.log(error); return Promise.reject(error); },
    );
    api.interceptors.response.use(
      (config) => { console.log(config); return config; },
      (error) => { console.log(error); return Promise.reject(error); },
    );
  }

  return api;
};

// Convert the object's key into snakeCase'd params, also remove keys with undefined or null value.
// Optionally accept list of keys that will be ommited from the resulting object.
export const toSanitizedSnakeCaseKey = (params, omitKeys = []) => (
  _(params)
    .omit(omitKeys)
    .omitBy(_.isUndefined)
    .omitBy(_.isNull)
    .mapKeys((v, k) => _.snakeCase(k))
    .value()
);

export const globalUserTokenInterceptor = (config) => {
  if (!_.has(config, 'headers.Authorization')) {
    _.merge(config, { headers: { Authorization: `Bearer ${'Update to user token method'}` } });
  }

  return config;
};

export const onStatus = (response, expectedStatusOrStatuses, callback) => {
  const expectedStatuses = (expectedStatusOrStatuses instanceof Array) ? expectedStatusOrStatuses : [expectedStatusOrStatuses];
  return _.includes(expectedStatuses, response.status) ? callback(response.data) : null;
};

export const checkStatusHandleError = (response, expectedStatusOrStatuses, callback) => {
  const status = onStatus(response, expectedStatusOrStatuses, callback);
  if (_.isNil(status)) {
    try {
      const errorMessage = (response.body.error instanceof Array)
        ? response.body.error.join(' ') : response.body.error;
      showPopupAlert(errorMessage);
    } catch (e) {
      showPopupAlert('Error while doing server transactions');
    }
    return null;
  }
  return status;
};
