import { storesTypes } from './types';

const showLoader = () => ({
  type: storesTypes.SHOW_LOADER,
});

const hideLoader = () => ({
  type: storesTypes.HIDE_LOADER,
});

export const fetchAllStores = () => ({
  type: storesTypes.FETCH_ALL_STORES,
});

export const StoreActionCreators = {
  showLoader,
  hideLoader,
  fetchAllStores,
};
