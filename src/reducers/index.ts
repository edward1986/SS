import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import user from './user/reducers';
import theme from './theme/reducers';
import category from './category/reducers';
import product from './product/reducers';
import address from './address/reducers';
import drawer from './drawer/reducers';
import blog from './blog/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default combineReducers({
  user: persistReducer(persistConfig, user),
  theme,
  category,
  product,
  address,
  drawer,
  blog
});
