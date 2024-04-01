/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Count from './Count';
import Style from './style';
import Item from './item';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Count);
// AppRegistry.registerComponent(appName, () => Style);
AppRegistry.registerComponent(appName, () => Item);
