import * as utils from './utils';

const BASE_URL = 'SSO_BASE_URL';

const api = utils.createAxiosInstance(BASE_URL);

export const sighIn = ({ body }) => api.post('/api/v0/users/lookup', { body });
