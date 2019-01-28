
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

const showLoader = () => ({
  type: SHOW_LOADER,
});

const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const LoaderActionCreators = {
  showLoader,
  hideLoader,
};
