import { bindActionCreators } from 'redux';
import { store } from '../store';
import { LoaderActionCreators } from './loaderActions';
// import { FirstAction } from './First';

export const ActionCreators = bindActionCreators({
  ...LoaderActionCreators,
}, store.dispatch);
