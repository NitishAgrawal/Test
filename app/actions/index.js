import { bindActionCreators } from 'redux';
import { store } from '../store';
import { StoreActionCreators } from './storeActions';

export const ActionCreators = bindActionCreators({
  ...StoreActionCreators,
}, store.dispatch);

